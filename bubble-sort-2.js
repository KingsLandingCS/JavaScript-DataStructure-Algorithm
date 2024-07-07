function bubbleSort(arr) {                   // Since the i equals to the length of the array, the outer loop will run until i is greater than 0.
    for (let i = arr.length; i > 0; i--) {   // ==> Because inner loop's process is dependent on outer loop, this is why we start i from end toward the start.
        for (var j = 0; j < i - 1; j++) {    // ==> inner loop uses outer loop's pointer, which is i, that is equal to "arr.length" we that use to implement a condition that inner loop will run until i - 1. Becuase the last element is already in place. This helps us to reduce the unnecessary steps.
            if (arr[j] > arr[j + 1]) {
                //SWAP!
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            console.log(arr);
        }
        console.log(`After ${i} iteration of i: ${arr}`);
    }
    return arr;
}

console.log(bubbleSort([5, 3, 8, 4, 2]));



// Outer Loop Iterations
// First Pass (i = 5):

// Inner loop: j runs from 0 to 3 (j < 4).
// Comparisons and swaps:
// Compare 5 and 3: Swap [3, 5, 8, 4, 2]
// Compare 5 and 8: No swap
// Compare 8 and 4: Swap [3, 5, 4, 8, 2]
// Compare 8 and 2: Swap [3, 5, 4, 2, 8]
// Largest element 8 is now in its correct position.
// Second Pass (i = 4):

// Inner loop: j runs from 0 to 2 (j < 3).
// Comparisons and swaps:
// Compare 3 and 5: No swap
// Compare 5 and 4: Swap [3, 4, 5, 2, 8]
// Compare 5 and 2: Swap [3, 4, 2, 5, 8]
// Second largest element 5 is now in its correct position.
// Third Pass (i = 3):

// Inner loop: j runs from 0 to 1 (j < 2).
// Comparisons and swaps:
// Compare 3 and 4: No swap
// Compare 4 and 2: Swap [3, 2, 4, 5, 8]
// Third largest element 4 is now in its correct position.
// Fourth Pass (i = 2):

// Inner loop: j runs from 0 to 0 (j < 1).
// Comparisons and swaps:
// Compare 3 and 2: Swap [2, 3, 4, 5, 8]
// Fourth largest element 3 is now in its correct position.
// Fifth Pass (i = 1):

// Inner loop: j does not run since j < 0 is false.
// Array is already sorted.




// Summary
// The outer loop controls how many times the array is traversed. It runs n times where n is the length of the array.
// The inner loop performs the actual comparison and swapping of elements. It runs fewer times with each pass of the outer loop because the largest elements are already in place at the end of the array.
// After each pass of the outer loop, the next largest element is placed in its correct position, reducing the range of the inner loop for subsequent passes.
// By the end of the outer loop, the entire array is sorted.