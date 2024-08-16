function integerToRoman(num) {
    // Define the Roman numeral symbols and their corresponding values
    const romanSymbols = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    // Initialize the result string
    let result = '';
    // Loop through each symbol, from largest to smallest
    for (let i = 0; i < romanSymbols.length; i++) {
        const { value, symbol } = romanSymbols[i];   // Extract the value and symbol's values from the current object key
        console.log(`Symbol: '${symbol}' Value: (${value})\n`);


        // Append the symbol to the result string while subtracting its value from num
        console.log(`Check: ${num} >= ${value} (${num >= value})\n`);
        while (num >= value) {
            result += symbol;  // Append the current symbol to the result string
            num -= value;   // Subtract the current symbol's value from num
        }
        console.log(`result after while loop: '${result}', num: ${num}\n`);

    }
    return result;
}

// Test cases
console.log(integerToRoman(1999));  // Output: 'MCMXCIX'
// console.log(integerToRoman(123));   // Output: 'CXXIII'
// console.log(integerToRoman(3420));  // Output: 'MMMCDXX'



// Detailed Iteration for 1999:
// 1st Iteration (M - 1000):
// Symbol: 'M', Value: 1000.
// Check: 1999 >= 1000 → true.
// Action: Append 'M' to result and subtract 1000 from num.
// Result: result = 'M', num = 999.

// 2nd Iteration (CM - 900):
// Symbol: 'CM', Value: 900.
// Check: 999 >= 900 → true.
// Action: Append 'CM' to result and subtract 900 from num.
// Result: result = 'MCM', num = 99.

// 3rd Iteration (D - 500):
// Symbol: 'D', Value: 500.
// Check: 99 >= 500 → false.
// Action: Skip this iteration (no change in result or num).

// 4th Iteration (CD - 400):
// Symbol: 'CD', Value: 400.
// Check: 99 >= 400 → false.
// Action: Skip this iteration.

// 5th Iteration (C - 100):
// Symbol: 'C', Value: 100.
// Check: 99 >= 100 → false.
// Action: Skip this iteration.

// 6th Iteration (XC - 90):
// Symbol: 'XC', Value: 90.
// Check: 99 >= 90 → true.
// Action: Append 'XC' to result and subtract 90 from num.
// Result: result = 'MCMXC', num = 9.
// 7th Iteration (L - 50):
// Symbol: 'L', Value: 50.
// Check: 9 >= 50 → false.
// Action: Skip this iteration.
// 8th Iteration (XL - 40):
// Symbol: 'XL', Value: 40.
// Check: 9 >= 40 → false.
// Action: Skip this iteration.
// 9th Iteration (X - 10):
// Symbol: 'X', Value: 10.
// Check: 9 >= 10 → false.
// Action: Skip this iteration.
// 10th Iteration (IX - 9):
// Symbol: 'IX', Value: 9.
// Check: 9 >= 9 → true.
// Action: Append 'IX' to result and subtract 9 from num.
// Result: result = 'MCMXCIX', num = 0.
// Remaining Iterations:
// For symbols 'V' (5), 'IV' (4), and 'I' (1), the check will fail because num is now 0. The loop will skip these iterations.
// Final Output:
// The result after all iterations is 'MCMXCIX', which is the Roman numeral representation of 1999.