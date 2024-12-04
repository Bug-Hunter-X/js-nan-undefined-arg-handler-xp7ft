function foo(x) {
  if (x === null || x === undefined) {
    return 0; // or throw an error: throw new Error('Input cannot be null or undefined');
  }
  return x + 1;
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: 0
console.log(foo(5)); // Output: 6