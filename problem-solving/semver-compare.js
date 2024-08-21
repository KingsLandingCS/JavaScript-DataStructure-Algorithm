function compare(version1, version2) {
    // Split the version strings into arrays of strings
    const v1 = version1.split('.').map(Number);  // In this case, the transformation is to convert each substring (which is currently a string) into a number using the Number function. Number is a predefined function in JavaScript.
    const v2 = version2.split('.').map(Number);
    console.log(`v1: ${v1}\nv2: ${v2}`);



    // Loop through each component (major, minor, patch)
    for (let i = 0; i < 3; i++) {
        if (v1[i] === v2[i]) {
            continue; // Both versions are equal, skip to the next component
        } else if (v1[i] > v2[i]) {
            return 1; // First version is greater, Additional notes: when a return statement is executed within a loop, it immediately terminates both the loop and the function.
        } else if (v1[i] > v2[i]) {
            return -1;  // Second version is greater
        }
    }

    return 0;  // Both versions are equal
}

// Example usage:
console.log(compare('12.1.0', '12.0.9'));  // Output: 1
console.log(compare('12.1.0', '12.1.0'));  // Output: 1





// Step 1: Splitting the Version Strings and Converting to Numbers
// javascript
// Copy code
// const v1 = version1.split('.').map(Number);
// const v2 = version2.split('.').map(Number);
// version1.split('.'): This splits the version string (e.g., '12.1.0') into an array of strings: ['12', '1', '0'].
// map(Number): This converts each string in the array to a number, resulting in an array of numbers: [12, 1, 0].
// This process is repeated for version2.
// Example:

// For '12.1.0', v1 becomes [12, 1, 0].
// For '12.0.9', v2 becomes [12, 0, 9].



// Step 2: Comparing the Versions Component by Component
// javascript
// Copy code
// for (let i = 0; i < 3; i++) {
//     if (v1[i] > v2[i]) {
//         return 1;  // First version is greater
//     } else if (v1[i] < v2[i]) {
//         return -1;  // Second version is greater
//     }
// }
// This loop iterates through the major, minor, and patch versions (i.e., the first, second, and third components of the version arrays).
// The loop compares the corresponding components of v1 and v2 at each index i.
// Iteration Details:
// Iteration 1 (i = 0):

// Compare the major versions: v1[0] (12) vs v2[0] (12).
// Since 12 == 12, the loop proceeds to the next iteration.
// Iteration 2 (i = 1):

// Compare the minor versions: v1[1] (1) vs v2[1] (0).
// Since 1 > 0, v1 is greater than v2.
// The function immediately returns 1, indicating that version1 is greater than version2.



// Step 3: Returning 0 if Both Versions are Equal
// javascript
// Copy code
// return 0;  // Both versions are equal
// If all components (major, minor, patch) of both versions are equal, the loop completes without returning, and the function returns 0, indicating that the versions are identical.