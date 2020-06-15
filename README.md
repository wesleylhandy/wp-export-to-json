# Wordpress Export to Json

Command-line tool to export data from the `wp-json` REST API built into modern versions of Wordpress. This is based on the `Dev.to` post by Luke Oliff entitled [Export Wordpress Posts to JAMStack Static Sites](https://dev.to/lukeocodes/export-wordpress-posts-to-jamstack-static-sites-m32).

## Usage

```sh
yarn install
```

Run the `start` script which expects a fully-qualified URL to the `wp-json` endpoint of a publicly accessible Wordpress site as the third argument.

```sh
yarn start "http(s)://yoursite.tld/path/to/wp-json/endpoint"
```

This will generate/overwrite the following files in the `json` directory:

- categories.json
- comments.json
- posts.json
- tags.json

## To Do:

Create script to covert JSON into format that can be imported into `sanity.io` dataset fitting a predetermined data model. See https://www.sanity.io/guides/guide-importing-data-from-external-sources

Add support to take two arguments, a base url and the `wp-json` path, since some Wordpress installations may specify a different path for the REST API.

Consider adding `chalk`, `commander`, and `inquirer` to make this script more interactive.

Determine how this could be used as `npm` package.

Add testing as needed.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/wesleylhandy/wp-export-to-json/tags). 

## Authors

* **Wesley L. Handy** - *Initial work* 

See also the list of [contributors](https://github.com/wesleylhandy/wp-export-to-json/contributors) who participated in this project.

## License

Copyright 2020 Wesley L. Handy

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Acknowledgments