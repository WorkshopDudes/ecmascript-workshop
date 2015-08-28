// Used by karma.conf.js to find all test files
var context = require.context('../tests', true, /-test\.js$/);
context.keys().forEach(context);
