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
        const { value, symbol } = romanSymbols[i];

        // Append the symbol to the result string while subtracting its value from num
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

// Test cases
console.log(integerToRoman(123));   // Output: 'CXXIII'
console.log(integerToRoman(1999));  // Output: 'MCMXCIX'
console.log(integerToRoman(3420));  // Output: 'MMMCDXX'


// Initial Setup
// Input Number: 1999
// Roman Symbols Array: Ordered from largest to smallest values.
// Iteration Details
// 1. Symbol: 'M' (1000)
// Check: 1999 >= 1000 (True)
// Action: Append M to result, subtract 1000 from num.
// Updated result: 'M'
// Updated num: 1999 - 1000 = 999
// Check Again: 999 >= 1000 (True)
// Action: Append another M to result, subtract 1000 from num.
// Updated result: 'MM'
// Updated num: 999 - 1000 = -1
// Check: -1 >= 1000 (False)
// End of Symbol 'M' Iteration.
// 2. Symbol: 'CM' (900)
// Check: 999 >= 900 (True)
// Action: Append CM to result, subtract 900 from num.
// Updated result: 'MMC'
// Updated num: 999 - 900 = 99
// Check Again: 99 >= 900 (False)
// End of Symbol 'CM' Iteration.
// 3. Symbol: 'D' (500)
// Check: 99 >= 500 (False)
// Action: Skip this symbol.
// End of Symbol 'D' Iteration.
// 4. Symbol: 'CD' (400)
// Check: 99 >= 400 (False)
// Action: Skip this symbol.
// End of Symbol 'CD' Iteration.
// 5. Symbol: 'C' (100)
// Check: 99 >= 100 (False)
// Action: Skip this symbol.
// End of Symbol 'C' Iteration.
// 6. Symbol: 'XC' (90)
// Check: 99 >= 90 (True)
// Action: Append XC to result, subtract 90 from num.
// Updated result: 'MMCMXC'
// Updated num: 99 - 90 = 9
// Check Again: 9 >= 90 (False)
// End of Symbol 'XC' Iteration.
// 7. Symbol: 'L' (50)
// Check: 9 >= 50 (False)
// Action: Skip this symbol.
// End of Symbol 'L' Iteration.
// 8. Symbol: 'XL' (40)
// Check: 9 >= 40 (False)
// Action: Skip this symbol.
// End of Symbol 'XL' Iteration.
// 9. Symbol: 'X' (10)
// Check: 9 >= 10 (False)
// Action: Skip this symbol.
// End of Symbol 'X' Iteration.
// 10. Symbol: 'IX' (9)
// Check: 9 >= 9 (True)
// Action: Append IX to result, subtract 9 from num.
// Updated result: 'MMCMXCIX'
// Updated num: 9 - 9 = 0
// Check Again: 0 >= 9 (False)
// End of Symbol 'IX' Iteration.
// 11. Symbol: 'V' (5)
// Check: 0 >= 5 (False)
// Action: Skip this symbol.
// End of Symbol 'V' Iteration.
// 12. Symbol: 'IV' (4)
// Check: 0 >= 4 (False)
// Action: Skip this symbol.
// End of Symbol 'IV' Iteration.
// 13. Symbol: 'I' (1)
// Check: 0 >= 1 (False)
// Action: Skip this symbol.
// End of Symbol 'I' Iteration.
// Final Result
// The final Roman numeral representation for the number 1999 is 'MMCMXCIX'.