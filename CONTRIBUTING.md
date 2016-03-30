# CONTRIBUTING.md

We'd love for you to contribute to our source code and to make this even better than it is
today! Here are the guidelines we'd like you to follow:

## <a name="rules"></a> Coding Rules

React-Setup uses `pre-git` as a git hook to run unit tests, check for lint errors and make sure commit message follow the proper format.

To ensure consistency throughout the source code, keep these rules in mind as you are working:

* All features or bug fixes **must be tested** by one or more specs.
* All public API methods **must be documented** with jsdoc.
* All files must be linted.

## <a name="commit"></a> Git Commit Guidelines

We have very precise rules over how our git commit messages can be formatted.  This leads to **more
readable messages** that are easy to follow when looking through the **project history**.

The commit message formatting using ([Commitizen](https://github.com/commitizen/cz-cli)).

### Commit Message Format

```
<type>: (<scope>:) <subject>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

### Revert
If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type
Must be one of the following:

* **feat**: A new feature - should have a ticket number
* **fix**: A bug fix - should have a ticket number
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation

### Scope
The scope could be anything specifying place of the commit change. For example: component, homepage, about, router, server, build, etc...

### Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

