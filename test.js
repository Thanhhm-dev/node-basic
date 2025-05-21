const assert = require('assert');

function sayHello() {
  return 'Hello ThanhHM';
}

assert.strictEqual(sayHello(), 'Hello Jenkins');
console.log('✅ Test passed!');
