var validator = require('validator');

console.log(validator.isEmail('foo@bar.org')); //=> true
console.log(validator.isISBN('978-D3-16-148410-0')); //=> true