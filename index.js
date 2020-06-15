const WPAPI = require(`wpapi`)
const fs = require(`fs`)
const endpoint = process.argv.length > 1 ? process.argv[2] : ``

const validEndpoint = (str) => {
  try {
    new URL(str)
  } catch (err) {
    console.error(err)
    return false
  }
  return true
}

if (endpoint && validEndpoint(endpoint)) {
  const wp = new WPAPI({ endpoint })

  const validTypes = [
    `posts`,
    `pages`,
    `comments`,
    `taxonomies`,
    `categories`,
    `tags`,
    `types`,
    `users`,
    `media`,
  ]

  const wpExportToJson = async (type) => {
    if (!validTypes.includes(type)) {
      return
    }
    let page = 1
    let data = {}
    const items = []

    do {
      try {
        data = await wp[type]().perPage(20).page(page)

        items.push(...data)
        page++
      } catch (err) {
        console.error(err)
      }
    } while (data._paging.links.next)

    fs.writeFile(
      `./json/${type}.json`,
      JSON.stringify(items),
      `utf8`,
      (err) => {
        if (err) {
          return console.error(err)
        }
        console.log(`JSON file has been saved.`)
        return true
      }
    )
  }

  wpExportToJson(`posts`)
  wpExportToJson(`comments`)
  wpExportToJson(`categories`)
  wpExportToJson(`tags`)
} else {
  throw new Error(`Invalid or Missing URL parameter`)
}
