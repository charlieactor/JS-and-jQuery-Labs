console.log(undefined == null);
console.log(NaN == NaN);
console.log(new String('foo') == 'foo');
console.log('' == false);
console.log([1,2] == '1,2');
console.log('1' == true);
console.log(NaN == false);
console.log(0 == '');


console.log("IDENTITY");

console.log(undefined === null);
console.log(NaN === NaN);
console.log(new String('foo') === 'foo');
console.log('' === false);
console.log([1,2] === '1,2');
console.log('1' === true);
console.log(NaN === false);
console.log(0 === '');

console.log("isNaN!!!!! Below:");

console.log(isNaN(undefined));
console.log(isNaN(NaN));
console.log(isNaN(null));
console.log(isNaN(''));
console.log(isNaN(false));
console.log(isNaN(0));
