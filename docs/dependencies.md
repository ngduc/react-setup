# NPM Dependencies

**VERIFICATION**

Things need to be verified after upgrading dependencies:

* Unit tests should work
* Integration tests (if any) should work
* Production build should have no error
* Server-side rendering: no ajax request on initial page load
* Routing: page should make ajax requests after routing
* Development HMR: changes to components should be reflected to browser
* I18n texts should be rendered correctly in different languages

**NOTES**

* koa-better-body: use ~2.0.1 because ^3.0.0 causes issues with session (for login) (10/14/2016). Need investigation.

* postcss-import: pinned to 8.1.0. Newer version causes this error (10/12/2016)
  * https://github.com/postcss/postcss-import/issues/207

```
Module build failed: (SystemJS) ENOENT: no such file or directory, open '/Users/duc/Documents/work/react-setup/object-assign'
[1] 	Error: ENOENT: no such file or directory, open '/Users/duc/Documents/work/react-setup/object-assign'
[1] 	    at Error (native)
[1] 	Error loading /Users/duc/Documents/work/react-setup/object-assign as "object-assign" from /Users/duc/Documents/work/react-setup/node_modules/babel-loader/index.js
[1]  @ multi main
```

* webpack: pinned to 2.1.0-beta.22 because 2.1.0-beta.23 causes a build error with heroku (as of 09/20/2016)
  * https://github.com/webpack/webpack/issues/3018
  
* webpack-dev-server: pinned to 2.1.0-beta.10, newer versions cause this error: (11/18/2016)

* extract-text-webpack-plugin: pinned to 2.0.0-beta.4, otherwise 'npm run dev' throws build error (01/27/2017)

```
webpack.validateSchema is not a function
```

* http2: pinned to 3.3.4 for now. Version 3.3.5 has a launching error (assert...) (09/14/2016)

**EXPECTED**

Expected console screenshot from $ npm run dev

<img src="https://github.com/ngduc/react-setup/blob/master/docs/assets/demo-inspect.png">
