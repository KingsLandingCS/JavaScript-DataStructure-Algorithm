function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //SWAP!
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
            console.log(arr);
        }
        if (noSwaps) break;
        console.log(`After ${i} iteration of i: ${arr}`);
    }
    return arr;
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));








// First Iteration of the Outer Loop:
// The outer loop starts with i = 8 (the length of the array).
// noSwaps is set to true at the beginning of the outer loop iteration.



// Inner Loop Execution:
// The inner loop runs from j = 0 to j < i - 1 (in this case, j < 7).
// During the first iteration of the inner loop, comparisons and swaps are made:
// Compare 8 and 1 → Swap → noSwaps set to false.
// Compare 8 and 2 → Swap → noSwaps already false.
// Compare 8 and 3 → Swap → noSwaps already false.
// Compare 8 and 4 → Swap → noSwaps already false.
// Compare 8 and 5 → Swap → noSwaps already false.
// Compare 8 and 6 → Swap → noSwaps already false.
// Compare 8 and 7 → Swap → noSwaps already false.



// End of First Iteration of the Outer Loop:
// After completing the inner loop, the algorithm checks the value of noSwaps.
// Since swaps were made, noSwaps is false.
// The condition if (noSwaps) break; is not satisfied, so the outer loop does not break and proceeds to the next iteration.



// Second Iteration of the Outer Loop:
// The outer loop decrements i by 1 (i = 7).
// noSwaps is set to true again at the beginning of this iteration.
// Inner Loop Execution (Second Iteration):

// The inner loop runs from j = 0 to j < 6.
// Comparisons are made, but no swaps are needed as the array is now sorted:
// Compare 1 and 2 → No swap → noSwaps remains true.
// Compare 2 and 3 → No swap → noSwaps remains true.
// Compare 3 and 4 → No swap → noSwaps remains true.
// Compare 4 and 5 → No swap → noSwaps remains true.
// Compare 5 and 6 → No swap → noSwaps remains true.
// Compare 6 and 7 → No swap → noSwaps remains true.



// End of Second Iteration of the Outer Loop:
// After completing the inner loop, the algorithm checks the value of noSwaps.
// Since no swaps were made, noSwaps is still true.
// The condition if (noSwaps) break; is satisfied, so the outer loop breaks early, and the algorithm terminates.