# Styled Components Starter 💅

_for [Heroku](https://www.heroku.com/) deployment_

## Overview

This is a simple starter to get you up and running with Styled Components. This is intended to provide:

* a lightweight Webpack config (for development and production)
* configuration for theming and fetching fonts from a CDN
* helpful tooling for development workflow
  * Test setup with Jest and Enzyme
  * ESLint / Stylelint
* Heroku-ready deployment setup

## Up & Running

Install dependencies:

```
$ yarn install
```

Fire up a development server:

```
$ yarn dev
```

Once the server is running, you can visit `http://localhost:8080/`

## Linting

```
$ npm i -g eslint eslint-watch
```

or if you need permissions:

```
$ sudo npm i -g eslint eslint-watch
```

To run the linter once:

```
$ yarn lint
```

To run the watch task:

```
$ yarn lint:watch
```

## Testing

An initial test suite has been setup with two tests (one passing and one intentionally failing).
We're using Jest and Enzyme for our test setup. The basic test setup lives in `./__tests__`.
The main configuration for Jest lives at the bottom of `package.json`. I've also added a few
handy scripts, which I've listed below. Jest also gives us a test coverage tool for free, so I've added that too. The setup is at the bottom of `package.json`. Everything is set to 90% coverage, but your welcome to update that to whatever you'd like.

To run the tests once:

```
$ yarn test
```

To run the watch script (for only relevant test files)

```
$ yarn test:watch
```

To run the watch script (for all test files)

```
$ yarn test:watchAll
```

To view the coverage report:

```
$ yarn test:coverage:report
```

## Review

If you'd like to run the linter and tests at once (this is a nice check before pushing to Github or deploys), you can run:

```
$ yarn review
```

## Production Build

To build your production assets and run the server:

```
$ yarn start
```

## Changelog

Looking for a particular version? View the [Changelog](CHANGELOG.mb)

## Contributing

I am thankful for any contributions made by the community. By contributing you agree to abide by the Code of Conduct in the [Contributing Guidelines](.github/CONTRIBUTING.md)

## License

[MIT](LICENSE)

## DEPLOYING TO HEROKU

This app is set up for deployment to Heroku!

_This assumes you have already have a Heroku account and have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed_

```
$ heroku login
$ heroku create -a name-of-your-app
$ git push heroku master
$ heroku open
```

Heroku will follow the `build` command in your `package.json` and compile assets with `webpack.prod.config.js`. It runs the Express web server in `server.js`.

If you're unfamiliar with Heroku deployment (or just need a refresher), they have a really great walkthrough [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction).
