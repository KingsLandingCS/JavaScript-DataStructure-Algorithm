function intersection(arr1, arr2) {
    // Convert the first array to a Set to remove duplicates and allow for efficient look-up
    let set1 = new Set(arr1);

    // Use a Set to store the intersection result to automatically handle duplicates
    let resultSet = new Set();

    // Iterate over the second array
    for (let item of arr2) {
        // If the item is in set1, add it to the resultSet
        if (set1.has(item)) {
            resultSet.add(item);
        }
    }

    // Convert the resultSet to an array
    return Array.from(resultSet);
}

// Example usage:


console.log(intersection([35, 15, 16, 18, 22, 23, 29, 28, 30], [16, 29, 30, 25, 42, 56, 82]));

