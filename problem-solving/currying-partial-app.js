
// partial application
function sum(a) {
    return function (b, c) {
        return a + b + c;
    };
}

const x = sum(10);

console.log(x(2, 3));
console.log(x(6, 1));

console.log(sum(20)(6, 1));
