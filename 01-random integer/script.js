function rand(min, max) {
  if (min === null && max === null) {
    return 0;
  }
  if (max === null) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(rand(20, 1)); // Output: 4
console.log(rand(1, 10)); // Output: 1
console.log(rand(6)); // Output: random integer antara 0 dan 6
console.log(rand()); // Output: 0
