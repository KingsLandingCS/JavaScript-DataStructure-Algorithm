function count() {
    // Increment the counter each time count() is called
    return ++count.counter;
}

// Initialize the counter property on the function
count.counter = 0;

// Implement the reset method to reset the counter
count.reset = () => {
    count.counter = 0;
};

// Example usage:
console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3

console.log(count.reset());


console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3





// Step-by-Step Explanation:
// Defining the count() Function:

// javascript
// Copy code
// function count() {
//     // Increment the counter each time count() is called
//     return ++count.counter;
// }
// Here, we define a function named count(). This function is intended to increment and return a counter every time it is called.
// count.counter is used to keep track of the counter value. Instead of defining a separate variable outside the function, the counter is attached as a property to the count function itself.
// The ++count.counter Statement:

// The expression ++count.counter is a pre-increment operation. It increments the value of count.counter by 1 and then returns the incremented value.
// For example, if count.counter is 0, the expression ++count.counter will increment it to 1 and then return 1.
// Note: Pre-increment (++variable) increments the value before returning it, whereas post-increment (variable++) increments the value but returns the original value before incrementing.
// Initializing the counter Property:

// javascript
// Copy code
// count.counter = 0;
// This line initializes the counter property of the count function to 0. By assigning count.counter = 0, we ensure that the counter starts at 0 before any calls to the count() function.
// In JavaScript, functions are also objects, which means you can assign properties to them like you would with any other object. Here, counter is being used as a property of the count function.
// Defining the reset() Method:

// javascript
// Copy code
// count.reset = function () {
//     count.counter = 0;
// };
// This line defines a method called reset() on the count function. The purpose of this method is to reset the counter to 0.
// When count.reset() is called, the value of count.counter is reset back to 0.
// Example Usage:

// javascript
// Copy code
// console.log(count()); // 1
// console.log(count()); // 2
// console.log(count()); // 3
// In this part of the code, the count() function is called multiple times, and the result is logged to the console.
// Here's what happens:
// The first call to count() increments count.counter from 0 to 1 and returns 1.
// The second call increments count.counter from 1 to 2 and returns 2.
// The third call increments count.counter from 2 to 3 and returns 3.
// Resetting the Counter:

// javascript
// Copy code
// count.reset();
// This line calls the reset() method of the count function, resetting count.counter back to 0.
// After this, any further calls to count() will start incrementing from 1 again.
// Further Example Usage:

// javascript
// Copy code
// console.log(count()); // 1
// console.log(count()); // 2
// console.log(count()); // 3
// After resetting the counter, the subsequent calls to count() behave as follows:
// The first call increments count.counter from 0 to 1 and returns 1.
// The second call increments count.counter from 1 to 2 and returns 2.
// The third call increments count.counter from 2 to 3 and returns 3.

// Summary:
// count() function: This function increments and returns a counter stored as a property of the function.
// count.counter: A property attached to the count function that keeps track of how many times the function has been called.
// count.reset() method: This method resets the counter to 0.
// ++count.counter: This is the pre-increment operator, which increments the counter and then returns the updated value.
// Built-in Functions Used:
// console.log(): This is a built-in function that outputs messages to the console. It's used here to print the results of calling the count() function.
// Pre-increment Operator (++): This is a built-in operator that increments the value of a variable and then returns the incremented value.