const multiply = (x, y) => x * y;
const curriedMultiply = x => y => x * y;

console.log(multiply(2, 3));
console.log(curriedMultiply(2)(3));

