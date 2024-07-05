function numberCompare(num1, num2) {
    return num2 - num1;
}

console.log([6, 4, 15, 10].sort(numberCompare));




// If the result of (num2 - num1) is positive, num1 should come after num2.
// If the result of (num2 - num1) is negative, num1 should come before num2.
// If the result of (num2 - num1) is zero, the order doesn't change.


// Example with Steps
// Given the array [6, 4, 15, 10], let's sort it in descending order.

// Initial Array
// Copy code
// [6, 4, 15, 10]
// Sorting Process
// Compare 6 and 4:

// numberCompare(6, 4) returns 4 - 6 = -2 (negative)
// Result: 6 should come before 4 (no change)
// Compare 6 and 15:

// numberCompare(6, 15) returns 15 - 6 = 9 (positive)
// Result: 15 should come before 6 (swap 6 and 15)
// Intermediate array: [15, 4, 6, 10]
// Compare 6 and 10:

// numberCompare(6, 10) returns 10 - 6 = 4 (positive)
// Result: 10 should come before 6 (swap 6 and 10)
// Intermediate array: [15, 4, 10, 6]
// Compare 4 and 10:

// numberCompare(4, 10) returns 10 - 4 = 6 (positive)
// Result: 10 should come before 4 (swap 4 and 10)
// Intermediate array: [15, 10, 4, 6]
// Compare 4 and 6:

// numberCompare(4, 6) returns 6 - 4 = 2 (positive)
// Result: 6 should come before 4 (swap 4 and 6)
// Final sorted array: [15, 10, 6, 4]
// Result
// After sorting, the array is [15, 10, 6, 4]. This is printed to the console: