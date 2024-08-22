function count() {
    // Increment the counter each time count() is called
    return ++count.counter;
}

// Initialize the counter property on the function
count.counter = 0;

// Implement the reset method to reset the counter
count.reset = function () {
    count.counter = 0;
};

// Example usage:
console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3

count.reset();

console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3