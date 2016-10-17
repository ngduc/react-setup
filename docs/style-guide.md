# Style Guide

* Naming conventions should be closely followed to ensure consistency.
* Consistent code, even when written by a team, should look like one person wrote it.
* It helps reduce the lead time required to understand an implementation.

## JS Standard

React-Setup uses [JS Standard Style](https://github.com/feross/standard)

We don't need semicolons since Javascript has ASI to take care of that.

But if you really want semicolons, change ".eslintrc" to use: `"semi": [2, "always"]` then you can run this command to insert them automatically:
```
$ eslint --fix src/**
```

References:
* [JS Standard Style Guide](https://github.com/feross/standard/blob/master/RULES.md)
* [ESLint Config Standard](https://github.com/feross/eslint-config-standard/blob/master/eslintrc.json)

## JSDocs

React-Setup uses [JSDocs](http://usejsdoc.org/) to document components, functions.

We don't have to use JSDocs for common functions (componentWillMount, render, etc.) to keep the line count short. 

References:
* http://usejsdoc.org
* http://usejsdoc.org/tags-param.html
* http://usejsdoc.org/tags-type.html

JSDocs Examples:

```
/**
 * Update an employee.
 * @param {Object} employee - Employee to update.
 * @param {number} salary - New salary.
 * @param {string} [title] - New title.
 * @returns {Object} - Error object.
 */
function updateEmployee(employee, salary, title) {
  // ...
  return errorObj;
};

/**
 * Add an item to itemArray.
 * @param {Object} param
 * @param {Array} param.itemArray - Array of items.
 * @param {Object} param.item - Item to add.
 * @param {boolean} param.[flag = true] - Flag to set.
 */
function addItem({ itemArray, item, flag = true }) {
  // ...
};

/**
 * Client-side helper to invoke functions in 'fragmentArr' to fetch data to the state.
 * @param {Array} fragmentArr - Array of fragments which declare functions to fetch data.
 * @param {Object} ctx - Context (e.g. this).
 * @param {callbackFn} [callbackFn] - Callback function to handle each fragment.
 *   @callback callbackFn
 *   @param {string} callbackFn.key - Fragment key.
 *   @param {Object} callbackFn.data - Fragment data.
 */
static fetchFragmentsToState (fragmentArr, ctx, callbackFn) {
  // ...
}
```
