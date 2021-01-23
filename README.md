# geo-search-application

Geo Search Application is responsible to consume the **geo-search-api**. It is a React application.

## Development Requirements

- node >= v12 [![node](https://img.shields.io/badge/node-v12-blue.svg?cacheSeconds=2592000)](https://nodejs.org/en/download/)
- npm >= v6 [![npm](https://img.shields.io/badge/npm-v6.3.0-blue)](https://www.npmjs.com/get-npm)


## Installation

Use the package manager [npm](https://www.npmjs.com/) to install request-multiple-urls.

```bash
$ git clone git@gitlab.com:mirlabraga/geo-search-application.git
$ cd geo-search-application
$ npm install
```

## Running the app

Firt all you need to run the backend application, for this, run: [**geo-search-api**](https://gitlab.com/mirlabraga/geo-search-api)

If you doing this in localhost, you need to run in a different port.

**WARN**
The application frontend I used the abosolutty URL on **src/components/location-search-table.js**

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Tests

  To run the test suite, first, install the dependencies, then run `npm run test`:

```bash
# unit tests
$ npm run test
```

## Contributing
The contribuinte are welcome. Feel free to open pull requests.

Please make certain to update the tests as necessary.

## License
[MIT](https://choosealicense.com/licenses/mit/)
