# IRIS

| Environment | Build status |
|-------------|--------------|
| Production  | [![Build Status](https://travis-ci.org/iris-dni/iris-frontend.svg?branch=master)](https://travis-ci.org/iris-dni/iris-frontend) |
| Staging     | [![Build Status](https://travis-ci.org/iris-dni/iris-frontend.svg?branch=staging)](https://travis-ci.org/iris-dni/iris-frontend)

### Node version

This project requires node `>= 4.0.0` due to [hapi](https://github.com/hapijs/hapi/blob/master/package.json) dependency.

### Global packages

[Stylelint](https://github.com/stylelint/stylelint) must be installed globally before making CSS changes in the codebase.

```sh
$ npm install -g stylelint
```

### Install the project:

```sh
$ npm install
```

### Available commands:

```sh
# to begin development
$ npm run dev

# to run the test suite
$ npm run test

# to run linting
$ npm run lint

# to build for production
$ npm run build

# to run the production server
$ npm start
```

### Enabled pre-commit hooks:

- `lint:js` - lint staged JS files against [semistandard](https://github.com/Flet/semistandard)
- `lint:css` - lint staged CSS files against [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)
