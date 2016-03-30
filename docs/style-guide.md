# Style Guide

## JS Standard

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

## JSDocs

React-Setup uses [JSDocs](http://usejsdoc.org/) to document functions.
Naming conventions should be strictly followed to ensure consistency.

References:
* http://usejsdoc.org
* http://usejsdoc.org/tags-param.html
* http://usejsdoc.org/tags-type.html

JSDocs Examples:

```
/**
 * Update salary of an employee.
 * @param {Object} employee - Employee to update.
 * @param {number} salary - New salary.
 * @param {string} [title] - New title.
 * @returns {Object} - Error object.
 */
function updateSalary(employee, salary, title) {
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
 *   @param {string} key - Fragment key.
 *   @param {Object} data - Fragment data.
 */
static fetchFragmentsToState (fragmentArr, ctx, callbackFn) {
  // ...
}
```
