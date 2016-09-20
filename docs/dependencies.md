# NPM Dependencies

NOTES

* postcss-import: use 8.0.2 because 8.1.2 causes this error (as of 09/16/2016)

```
Module build failed: (SystemJS) ENOENT: no such file or directory, open '/Users/duc/Documents/work/react-setup/object-assign'
[1] 	Error: ENOENT: no such file or directory, open '/Users/duc/Documents/work/react-setup/object-assign'
[1] 	    at Error (native)
[1] 	Error loading /Users/duc/Documents/work/react-setup/object-assign as "object-assign" from /Users/duc/Documents/work/react-setup/node_modules/babel-loader/index.js
[1]  @ multi main
```

* webpack: use 2.1.0-beta.22 because 2.1.0-beta.23 causes a build error with heroku (as of 09/20/2016)
  * https://github.com/webpack/webpack/issues/3018
