# IRIS

| Environment | Build status |
|-------------|--------------|
| Production  | [![Build Status](https://travis-ci.org/iris-dni/iris-frontend.svg?branch=master)](https://travis-ci.org/iris-dni/iris-frontend) |
| Staging     | [![Build Status](https://travis-ci.org/iris-dni/iris-frontend.svg?branch=staging)](https://travis-ci.org/iris-dni/iris-frontend)

### Node version

This project requires node `>= 4.0.0` due to [hapi](https://github.com/hapijs/hapi/blob/master/package.json) dependency.

### Global packages

[scss-lint](https://github.com/brigade/scss-lint) must be installed globally before making Sass / CSS changes in the codebase.

```sh
$ npm install -g scss-lint
```

### Install the project:

```sh
$ npm install
```

### Available commands:

```sh
# to begin development
$ npm run dev

# to run linting and the test suite
$ npm run test

# to run the test suite automatically on code changes
$ npm run watch:test

# to run linting
$ npm run lint

# to build for production
$ npm run build

# to run the production server
$ npm start
```

### Enabled pre-commit hooks:

- `lint:js` - lint staged JS files against [semistandard](https://github.com/Flet/semistandard)
- `lint:scss` - lint staged Scss / CSS files against [scss-lint](https://github.com/brigade/scss-lint)

----
## Theming a "private fork"

1. Create an empty [new private repository](https://github.com/new) on your Github account, select the "Private" option, then click Create.
2. On the following screen near the bottom, click "Import"
<img alt="" src="https://cloud.githubusercontent.com/assets/547148/18585656/80543416-7c18-11e6-8ecf-017cd85923c1.png">
3. Paste `https://github.com/iris-dni/iris-frontend` into the field that says _Your old repository’s clone URL_, then click "Begin import".
4. Wait a few moments while the `iris-dni/iris-frontend` repo imports into your private fork.
5. Clone **your** repo to your local machine.

```
$ git clone https://github.com/yourname/private-repo.git
$ cd private-repo/
```

6. Install the project

```
$ npm install
```

7. Edit the contents of `./src/theme/` folder to customize styles.

8. Fetch upstream changes by running:

```
$ npm run update
```

----
