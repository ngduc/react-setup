# React-Setup
**A Universal React Setup with i18n: Babel 6, Koa 2, React, React Router, React Transmit, React Bootstrap, React-intl, Mocha, Isparta, Webpack 2, InlineCSS/PostCSS, ESLint.**

I prefer to keep this setup trim but feel free to sprinkle some more pixie dust (Redux, Passport, etc.) to bake your project :)

[Live Demo](http://104.236.181.236:51431)

[![Circle CI](https://circleci.com/gh/ngduc/react-setup.svg?style=svg)](https://circleci.com/gh/ngduc/react-setup) [![Dependencies Status](https://david-dm.org/ngduc/react-setup.svg)](https://david-dm.org/ngduc/react-setup)

<img src="https://github.com/ngduc/react-setup/blob/master/docs/assets/demo.gif" width="480" height="282" >

## More Features
* I18n with [React-Intl](https://github.com/yahoo/react-intl)
* Babel ES2015 (ES6/ES7)
* Server rendering with [React Transmit](https://github.com/RickWong/react-transmit) (inspired by Facebook Relay)
* Inline CSS or PostCSS: your choice :)
* Code coverage with [Isparta](https://github.com/douglasduteil/isparta)
* Debug ES6 code with Webpack 2
* ESLint ES6 configuration
* Style guide: [JS Standard Style](docs/style-guide.md) - Want [semicolons?](docs/style-guide.md)
* Docker - build & launch your project - [Instructions](docs/docker.md)
* Development: HMR (Hot Module Replacement) for both client & server
* Production ready
* Miscellaneous features: pre-git, bunyan, mustache, GA tracking code, etc.

## Documentation

* [Style Guide](docs/style-guide.md) - JS Standard, JSDocs
* [Internationalization (i18n)](docs/i18n.md)
* [Dependencies Notes](docs/dependencies.md)
* [Docker files](docs/docker.md)

## Questions & Issues

* File an [Issue](https://github.com/ngduc/react-setup/issues)
* [![Join the chat at https://gitter.im/ngduc/react-setup](https://badges.gitter.im/ngduc/react-setup.svg)](https://gitter.im/ngduc/react-setup?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Usage

**Install**
```
npm install -g babel-cli
npm install
```

**Start DEV mode with Hot-Module-Replacement**
```
npm run dev
```

**Run tests**
```
npm test
npm run test-cov
```

**Build & Start PRODUCTION**
```
npm run build && npm start
```

## Contributing

PR, Stars ✭ and Issues Reporting are always welcome :)

Follow [CONTRIBUTING.md](CONTRIBUTING.md)
