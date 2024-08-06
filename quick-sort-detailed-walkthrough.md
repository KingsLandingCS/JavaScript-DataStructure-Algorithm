

**// To explain each iteration in the Quick Sort algorithm, let’s break down the code and walk through the steps with the provided example array [4, 8, 2, 1, 5, 7, 6, 3].**

// Initial Setup
// Array: [4, 8, 2, 1, 5, 7, 6, 3]
// Quick Sort Call: quickSort([4, 8, 2, 1, 5, 7, 6, 3], 0, 7)
// Iterations Breakdown
// 1. First Call to quickSort
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

// Second Call to pivot
// javascript
// Copy code
// pivot([3, 2, 1, 4, 5, 7, 6, 8], 0, 2);
// arr = [3, 2, 1, 4, 5, 7, 6, 8]
// start = 0
// end = 2
// The subarray being considered is [3, 2, 1]
// Initialization
// pivot = arr[start] = 3
// swapIdx = start = 0
// Iteration Details
// Iteration 1:
// i = 1
// Current element: arr[1] = 2
// Compare 2 with pivot (3):
// Since 2 < 3, we increment swapIdx by 1: swapIdx = 1
// Swap arr[swapIdx] and arr[i] (swap arr[1] and arr[1]): [3, 2, 1, 4, 5, 7, 6, 8]
// The array remains unchanged because we are swapping the element with itself.
// Iteration 2:
// i = 2
// Current element: arr[2] = 1
// Compare 1 with pivot (3):
// Since 1 < 3, we increment swapIdx by 1: swapIdx = 2
// Swap arr[swapIdx] and arr[i] (swap arr[2] and arr[2]): [3, 2, 1, 4, 5, 7, 6, 8]
// The array remains unchanged because we are swapping the element with itself.
// Final Swap
// After the loop completes, we need to place the pivot element in its correct position.

// Swap arr[start] and arr[swapIdx] (swap arr[0] and arr[2]):
// Array before swap: [3, 2, 1, 4, 5, 7, 6, 8]
// Array after swap: [1, 2, 3, 4, 5, 7, 6, 8]
// Result
// The pivot element 3 is now correctly positioned at index 2.
// The function returns swapIdx = 2, which is the index of the pivot element.
// Summary
// The subarray [3, 2, 1] is partitioned around the pivot 3.
// After partitioning, the array becomes [1, 2, 3, 4, 5, 7, 6, 8] with 3 correctly placed at index 2.
// The pivot function returns the pivot index 2, which is used in further recursive calls of the quickSort function to sort the left and right subarrays.
// I hope this makes the process clearer! If you have any more questions, feel free to ask.

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





// Right Sub Array Recursive call Explanation especially (Pivot)

// Recursive Calls After Partitioning:

// Left Side: quickSort(arr, 0, 2) → Sub-array [3, 2, 1]
// Right Side: quickSort(arr, 4, 7) → Sub-array [5, 7, 6, 8]
// Second Call on the Right Sub-array: quickSort(arr, 4, 7)
// Pivot Function Call: pivot(arr, 4, 7)

// Pivot Element: 5 (at index 4).

// Partitioning Logic:

// Compare 7 with 5: No swap (since 7 > 5).
// Compare 6 with 5: No swap (since 6 > 5).
// Compare 8 with 5: No swap (since 8 > 5).
// Final Swap to Move Pivot:

// Swap pivot 5 with the element at swapIdx (index 4), so no change is made as 5 is already in place.
// Pivot Index: 4

// Recursive Calls After Partitioning:

// Left Side: quickSort(arr, 4, 3) (no elements to sort)
// Right Side: quickSort(arr, 5, 7) → Sub-array [7, 6, 8]
// Third Call on the Right Sub-array of the Right Side: quickSort(arr, 5, 7)
// Pivot Function Call: pivot(arr, 5, 7)

// Pivot Element: 7 (at index 5).

// Partitioning Logic:

// Compare 6 with 7: Swap 7 and 6 → [3, 2, 1, 4, 5, 6, 7, 8].
// Compare 8 with 7: No swap (since 8 > 7).
// Final Swap to Move Pivot:

// Swap pivot 7 with the element at swapIdx (index 6), so no change is made as 7 is already in place.
// Pivot Index: 6

// Recursive Calls After Partitioning:

// Left Side: quickSort(arr, 5, 5) (single element [6], no sorting needed)
// Right Side: quickSort(arr, 7, 7) (single element [8], no sorting needed)
// Summary of Pivot Movement:
// Initial Call: Pivot 4 moved to index 3.
// Right Sub-array: Pivot 5 moved to index 4.
// Sub-array [7, 6, 8]: Pivot 7 moved to index 6.
// In each recursive call, the pivot is selected as the first element of the sub-array. The partitioning process rearranges the elements based on comparisons with the pivot. Finally, the pivot is swapped into its correct position, which becomes the pivot index for that recursive call. The pivot for the right sub-array [7, 6, 8] becomes 7 because it is the first element of that sub-array and its final position after partitioning is index 6.