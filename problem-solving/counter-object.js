function createCounter() {
    let _count = 0;

    const counter = {};

    Object.defineProperty(counter, 'count', {
        get() {
            return _count++;
        },
        set(value) {
            // Prevent altering the count value
            console.log("You cannot alter the count directly.");
        },
        configurable: false,
        enumerable: true
    });

    return counter;
}

const counter = createCounter();

console.log(counter.count); // 0
console.log(counter.count); // 1
console.log(counter.count); // 2
counter.count = 100;        // This will print a message and not alter the count
console.log(counter.count); // 3




// This code defines a createCounter function that returns an object with a custom getter for a count property, which increments a hidden variable(_count) each time it is accessed.The setter for the count property prevents it from being modified directly.Let's go through the code step by step:

// 1. Function Declaration: createCounter
// javascript
// Copy code
// function createCounter() {
//     let _count = 0;
// The function createCounter is declared.
// Inside this function, a variable _count is initialized to 0. This variable is private to the createCounter function and is not directly accessible from outside.
// 2. Create an Empty Object counter
//     javascript
// Copy code
//     const counter = {};
// A constant object counter is created.This object will later have a property count with customized getter and setter behavior.
// 3. Define a Property on counter
//     javascript
// Copy code
//     Object.defineProperty(counter, 'count', {
//         get() {
//             return _count++;
//         },
//         Object.defineProperty is used to define a new property count on the counter object.
// The property descriptor is passed as the second argument.Inside this descriptor:
//         get() is a getter function for the count property.
// The getter function returns the current value of _count and then increments _count using the post- increment operator(_count++).This means that each time counter.count is accessed, the current value of _count is returned, and then _count is incremented by 1.
// 4. Prevent Direct Modification via a Setter
// javascript
// Copy code
//         set(value) {
//         console.log("You cannot alter the count directly.");
//     },
//         The set() method defines a setter for the count property.
// When someone tries to assign a value to counter.count, this setter will be triggered.Instead of changing the value of _count, it simply logs a message: "You cannot alter the count directly." This prevents the direct modification of _count through counter.count.
// 5. Additional Property Configuration
//     javascript
// Copy code
//     configurable: false,
//         enumerable: true
// });
// configurable: false: This means the count property cannot be deleted or reconfigured(e.g., you cannot redefine this property with another defineProperty call).
// enumerable: true: This makes the count property show up during enumeration(e.g., when using for...in or Object.keys(counter)).
// 6. Return the counter Object
// javascript
// Copy code
// return counter;
// }
// The createCounter function returns the counter object.This object now has a custom count property with the behaviors defined by the getter and setter.
// 7. Usage Example
// javascript
// Copy code
// const counter = createCounter();
// The createCounter function is called, and its return value(the counter object) is stored in the constant counter.
// 8. Accessing the count Property
// javascript
// Copy code
// console.log(counter.count); // 0
// console.log(counter.count); // 1
// console.log(counter.count); // 2
// Each time counter.count is accessed:
// The getter function is called, which returns the current value of _count.
// After returning the value, _count is incremented.
// The first time counter.count is accessed, _count is 0, so 0 is logged, and then _count becomes 1.
// The second access logs 1 and increments _count to 2.
// The third access logs 2 and increments _count to 3.
// 9. Attempting to Modify the count Property
// javascript
// Copy code
// counter.count = 100;        // This will print a message and not alter the count
// When attempting to set counter.count to 100, the setter is triggered.
// The setter logs the message: "You cannot alter the count directly."
// The value of _count is not changed by this action.
// 10. Further Access to count
// javascript
// Copy code
// console.log(counter.count); // 3
// The next access to counter.count logs 3(the current value of _count after the previous increment) and then increments _count to 4.
// Summary
// The createCounter function returns an object with a count property that behaves like a counter.
// Each time the count property is accessed, it returns the current value of an internal counter(_count) and then increments the counter.
// Direct modification of the count property is prevented by a custom setter that logs a message instead of changing the counter.