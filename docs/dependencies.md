# NPM Dependencies

VERIFICATION

Things need to be verified after upgrading dependencies:

* Unit tests should work
* Integration tests (if any) should work
* Production build should have no error
* Server-side rendering: no ajax request on initial page load
* Routing: page should make ajax requests after routing
* Development HMR: changes to components should be reflected to browser
* I18n texts should be rendered correctly in different languages

NOTES

* postcss-import: pinned to 8.0.2 because 8.1.2 causes this error (as of 09/16/2016)

```
Module build failed: (SystemJS) ENOENT: no such file or directory, open '/Users/duc/Documents/work/react-setup/object-assign'
[1] 	Error: ENOENT: no such file or directory, open '/Users/duc/Documents/work/react-setup/object-assign'
[1] 	    at Error (native)
[1] 	Error loading /Users/duc/Documents/work/react-setup/object-assign as "object-assign" from /Users/duc/Documents/work/react-setup/node_modules/babel-loader/index.js
[1]  @ multi main
```

* webpack: pinned to 2.1.0-beta.22 because 2.1.0-beta.23 causes a build error with heroku (as of 09/20/2016)
  * https://github.com/webpack/webpack/issues/3018

* http2: pinned to 3.3.4 for now. Version 3.3.5 has a launching error (assert...) (09/14/2016)
