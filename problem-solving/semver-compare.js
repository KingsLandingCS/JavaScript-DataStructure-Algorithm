function compare(version1, version2) {
    // Split the version strings into arrays of strings
    const v1 = version1.split('.').map(Number);
    const v2 = version2.split('.').map(Number);

    // Loop through each component (major, minor, patch)
    for (let i = 0; i < 3; i++) {
        if (v1[i] > v2[i]) {
            return 1;  // First version is greater
        } else if (v1[i] < v2[i]) {
            return -1;  // Second version is greater
        }
    }

    return 0;  // Both versions are equal
}

// Example usage:
console.log(compare('12.1.0', '12.0.9'));  // Output: 1
console.log(compare('12.1.0', '12.1.2'));  // Output: -1
console.log(compare('5.0.1', '5.0.1'));    // Output: 0