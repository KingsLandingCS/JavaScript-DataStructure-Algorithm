function sortByLength(str1, str2) {
    return str1.length - str2.length;
}

console.log(["Zubair", "Underwood", "Data Structures", "Algorithms"].sort(sortByLength));



// If the result is negative, str1 is shorter than str2, str1 should come before str2.
// If the result is positive, str1 is longer than str2, str1 should come after str2.
// If the result is zero, they have the same length, and their order does not change relative to each other.


// Initial Array: ["Zubair", "Underwood", "Data Structures", "Algorithms"]
// After First Comparison: ["Zubair", "Underwood", "Data Structures", "Algorithms"] (no change)
// After Second Comparison: ["Zubair", "Underwood", "Data Structures", "Algorithms"] (no change)
// After Third Comparison: ["Zubair", "Underwood", "Algorithms", "Data Structures"] ("Algorithms" is moved before "Data Structures")
