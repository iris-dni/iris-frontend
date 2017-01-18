# Iris Frontend UI

[![Build Status](https://travis-ci.org/iris-dni/iris-frontend.svg?branch=master)](https://travis-ci.org/iris-dni/iris-frontend)

There are many topics that local communities regard as particularly pressing,
but journalists usually only discover them by accident. This problem inspired
our idea to create a platform where citizens' concerns can be collected and
rated on a municipal level. That way a newspaper can create space for those
topics, host a discussion and bring additional value to the local community.
That is the goal of "Project Iris".

The Frontend UI provides the user-facing interface to Iris.

## Getting Started

Iris Frontend UI works with Node.js v4.0.0 onwards. It requires access to a
running instance of the
[Iris Service API](https://github.com/iris-dni/iris-service). URLs and
credentials to this API have to be set configured in the [`.env`](.env.default)
file.

```sh
# Before you start, copy the example .env file and adapt it to your needs!
cp .env.default .env

# Then, simply run
npm install
npm run dev
```

If you stuck to the default `BASE_URL` and `DEV_ASSETS`, the Iris Frontend UI
will be available on [http://localhost:8000](http://localhost:8000), while
static assets will be served from
[http://localhost:8080](http://localhost:8080)

### Available `npm` Commands

```sh
# Start the development server
$ npm run dev

# Run tests and linting
$ npm run test

# Run tests automatically on code changes
$ npm run watch:test

# Run linting
$ npm run lint

# Build for production
$ npm run build

# Start the production server
$ npm start
```

### Enabled Pre-commit Hooks

Before each commit, `npm run lint:staged` is being executed to ensure code
quality.

- `lint:js` - lint staged JS files against [semistandard](https://github.com/Flet/semistandard)
- `lint:scss` - lint staged Scss / CSS files against [scss-lint](https://github.com/brigade/scss-lint)

Please note that [`scss-lint`](https://github.com/brigade/scss-lint) needs to
be installed in order to run this task.

## Customization

### Create A Fork

Before making adaptations to settings and translations you will have to fork
this project. In order to do so, [create a new repository in your GitHub
account](https://github.com/new), import
`https://github.com/iris-dni/iris-frontend` into your new repository, clone
your new repository to your local machine and proceed as described above in
[Getting Started](#getting-started).

### Keep Your Fork Updated

Fetch upstream changes to the IRIS software at any time by running

```sh
npm run update-iris
```

This will create a feature branch which will automatically be pushed to your
fork's repository where you can create a pull request and review the changes
before merging.

### Add A Custom Theme

Duplicate the default theme folder `src/theme` and add the new path to the
`.env` file.

```
THEME_PATH=themes/myTheme
```

Edit the contents of your theme, including the HTML snippets for head,
scripts and webfonts.

Adapt the Sass files in your theme's `styles` folder to over-write core colors
and typography via maps.

You can over-write any Javascript config for the project within the `config.js`
file in your theme. For a list of all available settings, see the main
[`config.js`](src/settings/config.js) settings file.

Custom translations can be added in the `translations.js` file in your theme
folder.

For all settings and translations, a deep-merge is performed so only additions
are required. Defaults will be used otherwise.

## Tests

You can run the tests along with code linting with

```sh
npm run test
```

For TDD you can watch the code for changes and run tests automatically with

```sh
npm run test:watch
```

For deeper insights on what and how to test, see our
[wiki](https://github.com/iris-dni/iris-frontend/wiki/Testing).
## Deployment (Heroku)

The project can be easily deployed to Heroku, using the official [buildpack for
Node.js](https://github.com/heroku/heroku-buildpack-nodejs). The config
variables `API_URL`, `BASE_URL`, `IMAGE_PROXY_KEY`, `SSO_PROVIDER_TEXT` and
`SSO_PROVIDER_URL` have to be set.

### HTTP Basic Authentication

For staging environments you may want to protect your site with basic
authentication. Simply adapt the `HTTP_AUTH_*` environment variables to your
needs. There is also a command line script to generate hashed passwords on the
console.

```sh
node scripts/generate-auth-password.js passwordtobehashed
```
