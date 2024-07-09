function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];    // ==> destructuring.
    }

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

console.log(bubbleSort([37, 45, 29, 8, 12, 88, -3]));



// Certainly! Let's go through the iterations of the outer and inner loops step by step to see how the bubble sort works on the example array [37, 45, 29, 8, 12, 88, -3].

// Initial Array
// [37, 45, 29, 8, 12, 88, -3]
// Outer Loop Iterations
// The outer loop runs arr.length - 1 times (6 times in this case, for an array length of 7).
// Detailed Inner Loop Iterations
// Outer Loop: i = 7
// Inner Loop: j = 0: Compare 37 and 45 → No swap
// Inner Loop: j = 1: Compare 45 and 29 → Swap to [37, 29, 45, 8, 12, 88, -3]
// Inner Loop: j = 2: Compare 45 and 8 → Swap to [37, 29, 8, 45, 12, 88, -3]
// Inner Loop: j = 3: Compare 45 and 12 → Swap to [37, 29, 8, 12, 45, 88, -3]
// Inner Loop: j = 4: Compare 45 and 88 → No swap
// Inner Loop: j = 5: Compare 88 and -3 → Swap to [37, 29, 8, 12, 45, -3, 88]
// Array after first outer loop iteration:

// csharp
// Copy code
// [37, 29, 8, 12, 45, -3, 88]
// Outer Loop: i = 6
// Inner Loop: j = 0: Compare 37 and 29 → Swap to [29, 37, 8, 12, 45, -3, 88]
// Inner Loop: j = 1: Compare 37 and 8 → Swap to [29, 8, 37, 12, 45, -3, 88]
// Inner Loop: j = 2: Compare 37 and 12 → Swap to [29, 8, 12, 37, 45, -3, 88]
// Inner Loop: j = 3: Compare 37 and 45 → No swap
// Inner Loop: j = 4: Compare 45 and -3 → Swap to [29, 8, 12, 37, -3, 45, 88]
// Array after second outer loop iteration:

// csharp
// Copy code
// [29, 8, 12, 37, -3, 45, 88]
// Outer Loop: i = 5
// Inner Loop: j = 0: Compare 29 and 8 → Swap to [8, 29, 12, 37, -3, 45, 88]
// Inner Loop: j = 1: Compare 29 and 12 → Swap to [8, 12, 29, 37, -3, 45, 88]
// Inner Loop: j = 2: Compare 29 and 37 → No swap
// Inner Loop: j = 3: Compare 37 and -3 → Swap to [8, 12, 29, -3, 37, 45, 88]
// Array after third outer loop iteration:

// csharp
// Copy code
// [8, 12, 29, -3, 37, 45, 88]
// Outer Loop: i = 4
// Inner Loop: j = 0: Compare 8 and 12 → No swap
// Inner Loop: j = 1: Compare 12 and 29 → No swap
// Inner Loop: j = 2: Compare 29 and -3 → Swap to [8, 12, -3, 29, 37, 45, 88]
// Array after fourth outer loop iteration:

// csharp
// Copy code
// [8, 12, -3, 29, 37, 45, 88]
// Outer Loop: i = 3
// Inner Loop: j = 0: Compare 8 and 12 → No swap
// Inner Loop: j = 1: Compare 12 and -3 → Swap to [8, -3, 12, 29, 37, 45, 88]
// Array after fifth outer loop iteration:

// csharp
// Copy code
// [8, -3, 12, 29, 37, 45, 88]
// Outer Loop: i = 2
// Inner Loop: j = 0: Compare 8 and -3 → Swap to [-3, 8, 12, 29, 37, 45, 88]
// Array after sixth outer loop iteration:

// css
// Copy code
// [-3, 8, 12, 29, 37, 45, 88]
// At this point, the array is sorted. Each pass of the outer loop ensures that the largest unsorted element "bubbles up" to its correct position at the end of the array.

// Final Sorted Array
// css
// Copy code
// [-3, 8, 12, 29, 37, 45, 88]
// Feel free to ask any questions or provide the next algorithm template you'd like to learn!