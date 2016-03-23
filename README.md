# React-Setup
**A Universal React setup with i18n: Babel 6, Koa 2, React, React Router, React Transmit, React Bootstrap, React-intl, Mocha, Isparta, Webpack HMR, InlineCSS/PostCSS, ESLint.**

I prefer to keep this setup trim but feel free to sprinkle some more pixie dust (Redux, Passport, etc.) to bake your project :)

[Live Demo](http://104.236.181.236:51431)

[![Circle CI](https://circleci.com/gh/ngduc/react-setup.svg?style=svg)](https://circleci.com/gh/ngduc/react-setup) [![Dependencies Status](https://david-dm.org/ngduc/react-setup.svg)](https://david-dm.org/ngduc/react-setup)

<img src="https://github.com/ngduc/react-setup/blob/master/docs/assets/demo.gif" width="400" height="308" >

## More Features
* I18n with [React-intl](https://github.com/yahoo/react-intl)
* Babel ES6, ES2015
* Server rendering with React Transmit
* Inline CSS or PostCSS: your choice :)
* Code coverage with [Isparta](https://github.com/douglasduteil/isparta)
* ESLint ES6 configuration
* Debug ES6 code with Webpack
* Docker - build & launch your project - [Instructions](docs/docker.md)
* Development: HMR for both client & server
* Production ready
* Style guide: [JS Standard Style](docs/js-standard.md) - Want [semicolons?](docs/js-standard.md)

## Questions & Issues

* File an [Issue](https://github.com/ngduc/react-setup/issues)
* [![Join the chat at https://gitter.im/ngduc/react-setup](https://badges.gitter.im/ngduc/react-setup.svg)](https://gitter.im/ngduc/react-setup?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Usage

**Install**
```
npm install babel-cli -g
npm install
```

**Start the application in DEV mode with Hot-Module-Replacement**
```
npm run dev
```

**Run tests**
```
npm test
npm run test-cov
```

**Build & Start Production**
```
npm run build && npm start
```

## Contributing

PR and issues reporting are always welcome :)

Follow [CONTRIBUTING.md](CONTRIBUTING.md)
