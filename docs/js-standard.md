# JS Standard

react-setup uses [JS Standard Style](https://github.com/feross/standard)

We don't need semicolons since JS has ASI to take care of that.

But if you really want semicolons, change ".eslintrc" to use:
```
"semi": [2, "always"]
```
then you can run this command to insert them automatically:
```
$ eslint --fix src/**
```
