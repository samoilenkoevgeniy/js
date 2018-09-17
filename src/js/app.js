// require('./stacked_call.js');
// console.log('------');
// require('./timeouts.js');
// console.log('------');
// require('./test.js');
// console.log('------');
// require('./inheritance.js');
// console.log('------');
// require('./closures.js');
// console.log('------');
// require('./context.js');
console.log('------');
// require('./scope.js');
// console.log('------');
// require('./prototype.js');
// console.log('------');
// require('./links.js');

// Object.prototype.valueOf = function(){ return JSON.stringify( this ) }
//
// console.log( {a:{b:2}} === {a:{b:2}} );
var obj = { name: 'amy', valueOf: () => 'test', toString: () => 'test', toPrimitive: () => true};

var obj1 = { name: 'amy', valueOf: () => 'test', toString: () => 'test', toPrimitive: () => true};

console.log( obj == obj1 );