function findSingle(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result ^= arr[i]; // XOR operation  Property of XOR: XOR has a special property where a number XORed with itself results in 0 (e.g., 2 ^ 2 = 0), and any number XORed with 0 remains unchanged (e.g., 10 ^ 0 = 10).
        console.log(`After XOR with ${arr[i]}, result = ${result}`);
    }
    console.log(`The number that appears only once is: ${result}`);
    return result;
}

console.log(findSingle([10, 2, 2, 1, 0, 0, 10]));



// What is XOR?
// XOR stands for "exclusive OR." It's a way to compare two numbers (specifically their binary forms) and decide a new number based on a simple rule.

// The Rule of XOR:
// When you compare two numbers using XOR:

// If the two bits (binary digits) are the same, the result is 0.
// If the two bits are different, the result is 1.
// Visualizing XOR with a Simple Example:
// Let's think of two light switches:

// If both switches are off (0 and 0), the light stays off (0).
// If both switches are on (1 and 1), the light also stays off (0).
// If one switch is on (1) and the other is off (0), the light turns on (1).
// This is exactly how XOR works!



// Example Array:
// Let's use the array [10, 2, 2, 1, 0, 0, 10] as an example.

// Initial Setup:
// result is initialized to 0.
// We will iterate over each element in the array and XOR it with result.
// Iteration Breakdown:
// First Iteration (i = 0):

// Element: 10
// Operation: result ^= 10
// Calculation: 0 ^ 10 = 10
// Result after iteration: result = 10
// Explanation:

// We start with result being 0.
// XOR 0 with 10, which gives 10. So, result is now 10.
// Second Iteration (i = 1):

// Element: 2
// Operation: result ^= 2
// Calculation: 10 ^ 2 = 8
// Result after iteration: result = 8
// Explanation:

// XOR result (which is 10) with 2, which gives 8. So, result is now 8.
// Third Iteration (i = 2):

// Element: 2
// Operation: result ^= 2
// Calculation: 8 ^ 2 = 10
// Result after iteration: result = 10
// Explanation:

// XOR result (which is 8) with 2. Since 2 is XOR'd with itself, they cancel each other out (remember 2 ^ 2 = 0), and the remaining value is 10.
// Fourth Iteration (i = 3):

// Element: 1
// Operation: result ^= 1
// Calculation: 10 ^ 1 = 11
// Result after iteration: result = 11
// Explanation:

// XOR result (which is 10) with 1, which gives 11. So, result is now 11.
// Fifth Iteration (i = 4):

// Element: 0
// Operation: result ^= 0
// Calculation: 11 ^ 0 = 11
// Result after iteration: result = 11
// Explanation:

// XOR result (which is 11) with 0. XOR with 0 does not change the number, so result remains 11.
// Sixth Iteration (i = 5):

// Element: 0
// Operation: result ^= 0
// Calculation: 11 ^ 0 = 11
// Result after iteration: result = 11
// Explanation:

// XOR result (which is 11) with 0. Again, XOR with 0 does not change the number, so result remains 11.
// Seventh Iteration (i = 6):

// Element: 10
// Operation: result ^= 10
// Calculation: 11 ^ 10 = 1
// Result after iteration: result = 1
// Explanation:

// XOR result (which is 11) with 10. The previous 10 is canceled out by this 10 (because 10 ^ 10 = 0), and the remaining value is 1.




// Let's break down how XOR (^) works in this case with the numbers 10 and 2.

// Step-by-Step XOR Calculation
// Convert 10 and 2 to Binary:

// 10 in binary is 1010.
// 2 in binary is 0010.
// Align the Binary Numbers:

// csharp
// Copy code
// 1010  (This is 10)
// 0010 



// Step-by-Step XOR Calculation for 8 ^ 2
// Convert 8 and 2 to Binary:

// 8 in binary is 1000.
// 2 in binary is 0010.
// Align the Binary Numbers:


// Copy code
// 1000  (This is 8)
// 0010  (This is 2)
// Apply XOR Bit by Bit:

// XOR each corresponding bit from the two numbers:
// vbnet
// Copy code
// 1 XOR 0 = 1
// 0 XOR 0 = 0
// 0 XOR 1 = 1
// 0 XOR 0 = 0
// When you XOR 1000 with 0010, you get 1010.

// Result in Binary:

// 1010 in binary is the result of 8 XOR 2.
// Convert the Result Back to Decimal:

// 1010 in binary equals 10 in decimal.
// Explanation Recap:
// XOR compares each bit of the two numbers.
// If the bits are the same, the result is 0.
// If the bits are different, the result is 1.
// Thus, when you XOR 8 (1000 in binary) with 2 (0010 in binary), the result is 10 (1010 in binary).