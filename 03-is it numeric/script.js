function isItNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

console.log(isItNumeric(12)); // Output: true
console.log(isItNumeric('abcd')); // Output: false
console.log(isItNumeric('12')); // Output: true
console.log(isItNumeric(' ')); // Output: false
console.log(isItNumeric(1.20)); // Output: true
console.log(isItNumeric(-200)); // Output: true
