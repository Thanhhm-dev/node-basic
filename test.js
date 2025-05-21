const assert = require('assert');

function sayHello() {
  return 'Hello Jenkins';
}

assert.strictEqual(sayHello(), 'Hello Jenkins');
console.log('✅ Test passed!');
