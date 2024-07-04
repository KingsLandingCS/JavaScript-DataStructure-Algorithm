function binarySearch(arr, elem) {

    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;

    // if (arr[middle] == elem) {
    //     return middle;
    // }
    // return -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 28));



// Example Execution
// Consider the example provided:

// javascript
// Copy code
// console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 28));
// Initial values:

// start = 0
// end = 7
// middle = Math.floor((0 + 7) / 2) = 3
// arr[middle] = 9
// First iteration:

// elem (28) > arr[middle] (9)
// start = middle + 1 = 4
// middle = Math.floor((4 + 7) / 2) = 5
// arr[middle] = 15
// Second iteration:

// elem (28) > arr[middle] (15)
// start = middle + 1 = 6
// middle = Math.floor((6 + 7) / 2) = 6
// arr[middle] = 28
// Exit loop:

// arr[middle] === elem
// Return middle, which is 6
// The function correctly returns 6, indicating that the element 28 is at index 6 in the array.