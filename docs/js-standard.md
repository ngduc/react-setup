# JS Standard

React-Setup uses [JS Standard Style](https://github.com/feross/standard)

We don't need semicolons since JS has ASI to take care of that.

[Style Guide](https://github.com/feross/standard/blob/master/RULES.md)

But if you really want semicolons, change ".eslintrc" to use:
```
"semi": [2, "always"]
```
then you can run this command to insert them automatically:
```
$ eslint --fix src/**
```
