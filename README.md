# react-setup
**A Universal React setup with i18n: Babel 6, Koa 2, React, React Router, React Transmit, React Bootstrap, React-intl, Mocha, Webpack HMR, PostCSS, ESLint.**

I prefer to keep this setup trim but feel free to sprinkle some more pixie dust (Redux, Passport, etc.) to bake your project :)

[![Dependencies Status](https://david-dm.org/ngduc/react-setup.svg)](https://david-dm.org/ngduc/react-setup)

## More Features
* I18n with [React-intl](https://github.com/yahoo/react-intl)
* Babel ES6 & class syntax for React components
* Server rendering with React Transmit
* Inline CSS or PostCSS: your choice :)
* Code coverage with [isparta](https://github.com/douglasduteil/isparta)
* ESLint ES6 configuration
* Debug ES6 code with Webpack
* Development: HMR for both client & server
* Production ready

<img src="https://github.com/ngduc/react-setup/blob/master/docs/assets/demo.gif" height="416" >

## Questions & Issues

* File an [Issue](https://github.com/ngduc/react-setup/issues)
* [![Join the chat at https://gitter.im/ngduc/react-setup](https://badges.gitter.im/ngduc/react-setup.svg)](https://gitter.im/ngduc/react-setup?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Usage

**Install**
```
npm install babel-cli -g
npm install eslint -g
npm install
```

**Start the application in DEV mode with Hot-Module-Replacement**
```
npm run dev
```

**Run tests**
```
npm test
npm run test:watch
```

Generate code coverage report
```
npm run test:cov
```

**Build & Start Production**
```
npm run build && npm start
```

## Contributing

PR and issues reporting are always welcome :)

Follow [CONTRIBUTING.md](CONTRIBUTING.md)
