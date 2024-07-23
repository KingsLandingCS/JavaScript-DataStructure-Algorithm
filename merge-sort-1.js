function mergeSort(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }

        while (i < arr1.length) {
            results.push(arr1[i]);
            i++;
        }
        while (j < arr2.length) {
            results.push(arr2[j]);
            j++;
        }
    }
    return results;
}

console.log(mergeSort([1, 5, 6, 25, 32], [20, 30, 35, 55, 99, 100]));


// Time complexity: O(n)
// Space Complexity: O(1)