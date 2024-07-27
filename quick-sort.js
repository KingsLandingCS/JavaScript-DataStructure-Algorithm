function pivot(arr, start = 0, end = arr.length - 1) {    //start = 0: This means that if the caller does not provide a value for start, it will default to 0.
    // end = arr.length - 1: This means that if the caller does not provide a value for end, it will default to arr.length - 1, which is the last index of the array arr.
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    console.log(`Orginal Array: ${arr}`);
    for (let i = start + 1; i <= end; i++) {
        console.log(`Iteration ${i}: ${arr}`);
        if (pivot > arr[i]) {
            swapIdx++;
            console.log(`Swap: ${swapIdx} and ${i}`);
            swap(arr, swapIdx, i);
            console.log(`Results of loop at iteration ${i}: ${arr}`);
        }
    }
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx); // the swapIdx is 3 here because of the manipulation in for loop above, and arr will updated too. Start will be 0 though. There will be final swap call to update the pivot position.
    // return `final array: ${arr} Pivot: ${pivot} SwapIdx: ${swapIdx}`;
    return swapIdx;
}


function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right)
        //left
        quickSort(arr, left, pivotIndex - 1);
        //right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
// console.log(quickSort([]));





// To explain each iteration in the Quick Sort algorithm, let’s break down the code and walk through the steps with the provided example array [4, 8, 2, 1, 5, 7, 6, 3].

// Initial Setup
// Array: [4, 8, 2, 1, 5, 7, 6, 3]
// Quick Sort Call: quickSort([4, 8, 2, 1, 5, 7, 6, 3], 0, 7)
// Iterations Breakdown
// 1. First Call to quickSort
// javascript
// Copy code
// quickSort([4, 8, 2, 1, 5, 7, 6, 3], 0, 7);
// Range: start = 0, end = 7
// Pivot Function Call: pivot([4, 8, 2, 1, 5, 7, 6, 3], 0, 7)
// 2. Pivot Function Execution
// Initial State:

// Pivot: 4 (element at index 0)
// Array: [4, 8, 2, 1, 5, 7, 6, 3]
// Swap Index (swapIdx): 0
// Iteration Details:

// Iteration 1 (i = 1):

// Element: 8
// Condition: 4 > 8 (false)
// Action: No swap. Array remains [4, 8, 2, 1, 5, 7, 6, 3].
// Iteration 2 (i = 2):

// Element: 2
// Condition: 4 > 2 (true)
// Action: Increment swapIdx to 1, swap 2 with 8.
// Array after Swap: [4, 2, 8, 1, 5, 7, 6, 3]
// Iteration 3 (i = 3):

// Element: 1
// Condition: 4 > 1 (true)
// Action: Increment swapIdx to 2, swap 1 with 8.
// Array after Swap: [4, 2, 1, 8, 5, 7, 6, 3]
// Iteration 4 (i = 4):

// Element: 5
// Condition: 4 > 5 (false)
// Action: No swap. Array remains [4, 2, 1, 8, 5, 7, 6, 3].
// Iteration 5 (i = 5):

// Element: 7
// Condition: 4 > 7 (false)
// Action: No swap. Array remains [4, 2, 1, 8, 5, 7, 6, 3].
// Iteration 6 (i = 6):

// Element: 6
// Condition: 4 > 6 (false)
// Action: No swap. Array remains [4, 2, 1, 8, 5, 7, 6, 3].
// Iteration 7 (i = 7):

// Element: 3
// Condition: 4 > 3 (true)
// Action: Increment swapIdx to 3, swap 3 with 8.
// Array after Swap: [4, 2, 1, 3, 5, 7, 6, 8]
// Final Swap:

// Swap the pivot (4) with the element at swapIdx (3).
// Array after Final Swap: [3, 2, 1, 4, 5, 7, 6, 8]
// Pivot Index: 3
// 3. Recursive Calls in Quick Sort
// Left Sub-array: quickSort([3, 2, 1, 4, 5, 7, 6, 8], 0, 2)

// Right Sub-array: quickSort([3, 2, 1, 4, 5, 7, 6, 8], 4, 7)

// Detailed Iterations for Left Sub-array quickSort([3, 2, 1, 4, 5, 7, 6, 8], 0, 2)
// Call to pivot for Left Sub-array
// Initial State:
// Pivot: 3
// Array: [3, 2, 1, 4, 5, 7, 6, 8]
// Swap Index (swapIdx): 0
// Iteration Details:

// Iteration 1 (i = 1):

// Element: 2
// Condition: 3 > 2 (true)
// Action: Increment swapIdx to 1, swap 2 with 2 (no visible change).
// Array: [3, 2, 1, 4, 5, 7, 6, 8]
// Iteration 2 (i = 2):

// Element: 1
// Condition: 3 > 1 (true)
// Action: Increment swapIdx to 2, swap 1 with 1 (no visible change).
// Array: [3, 2, 1, 4, 5, 7, 6, 8]
// Final Swap:

// Swap the pivot (3) with the element at swapIdx (1).
// Array after Final Swap: [1, 2, 3, 4, 5, 7, 6, 8]
// Pivot Index: 2
// Recursive Calls for Left Sub-array [1, 2, 3]
// Left Sub-array: quickSort([1, 2, 3, 4, 5, 7, 6, 8], 0, 1)

// Right Sub-array: quickSort([1, 2, 3, 4, 5, 7, 6, 8], 3, 2) (Base case, no further action)

// Detailed Iterations for Right Sub-array quickSort([4, 5, 7, 6, 8], 4, 7)
// Call to pivot for Right Sub-array
// Initial State:
// Pivot: 5
// Array: [1, 2, 3, 4, 5, 7, 6, 8]
// Swap Index (swapIdx): 4
// Iteration Details:

// Iteration 1 (i = 5):

// Element: 7
// Condition: 5 > 7 (false)
// Action: No swap. Array remains [1, 2, 3, 4, 5, 7, 6, 8].
// Iteration 2 (i = 6):

// Element: 6
// Condition: 5 > 6 (false)
// Action: No swap. Array remains [1, 2, 3, 4, 5, 7, 6, 8].
// Iteration 3 (i = 7):

// Element: 8
// Condition: 5 > 8 (false)
// Action: No swap. Array remains [1, 2, 3, 4, 5, 7, 6, 8].
// Final Swap:

// Swap the pivot (5) with the element at swapIdx (5).
// Array after Final Swap: [1, 2, 3, 4, 5, 7, 6, 8]
// Pivot Index: 4
// Recursive Calls for Right Sub-array [5, 7, 6, 8]
// Left Sub-array: quickSort([1, 2, 3, 4, 5, 7, 6, 8], 5, 3) (Base case, no further action)

// Right Sub-array: quickSort([1, 2, 3, 4, 5, 7, 6, 8], 6, 7)

// Final Calls to pivot for Right Sub-array [7, 6, 8]
// Call to pivot for [7, 6, 8]
// Initial State:
// Pivot: 7
// Array: [1, 2, 3, 4, 5, 7, 6, 8]
// Swap Index (swapIdx): 6
// Iteration Details:

// Iteration 1 (i = 6):

// Element: 6
// Condition: 7 > 6 (true)
// Action: Increment swapIdx to 7, swap 6 with 6 (no visible change).
// Array: [1, 2, 3, 4, 5, 7, 6, 8]
// Iteration 2 (i = 7):

// Element: 8
// Condition: 7 > 8 (false)
// Action: No swap. Array remains [1, 2, 3, 4, 5, 7, 6, 8].
// Final Swap:

// Swap the pivot (7) with the element at swapIdx (7).
// Array after Final Swap: [1, 2, 3, 4, 5, 6, 7, 8]
// Pivot Index: 6
// Final Recursive Calls
// Left Sub-array: quickSort([1, 2, 3, 4, 5, 6, 7, 8], 6, 5) (Base case, no further action)

// Right Sub-array: quickSort([1, 2, 3, 4, 5, 6, 7, 8], 7, 7) (Base case, no further action)

// Summary
// The Quick Sort algorithm recursively partitions the array around pivots, sorts the sub-arrays, and combines them to produce a fully sorted array. Each iteration of the pivot function reorders elements around the pivot, and recursive calls ensure that all sub-arrays are sorted. The final result for the example array [4, 8, 2, 1, 5, 7, 6, 3] is [1, 2, 3, 4, 5, 6, 7, 8].