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