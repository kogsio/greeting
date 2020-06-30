var utils  = require('course-utilities');
var hello = utils.load('./hello.js', 'hello');

test('outputs the correct string', () => {
  expect(hello()).toBe("Hello World!");
});