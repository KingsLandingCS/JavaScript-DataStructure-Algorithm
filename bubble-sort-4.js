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




// Detailed Walkthrough
// Let's walk through the algorithm with an example array: [8, 1, 2, 3, 4, 5, 6, 7].

// Initial State
// Array: [8, 1, 2, 3, 4, 5, 6, 7]
// Outer loop starts with i = arr.length (which is 8).
// First Iteration of the Outer Loop
// Set noSwaps = true:
// noSwaps is set to true.


// The inner loop runs, comparing and potentially swapping adjacent elements:
// j = 0: Compare 8 and 1 → Swap → noSwaps = false
// j = 1: Compare 8 and 2 → Swap → noSwaps = false
// j = 2: Compare 8 and 3 → Swap → noSwaps = false
// j = 3: Compare 8 and 4 → Swap → noSwaps = false
// j = 4: Compare 8 and 5 → Swap → noSwaps = false
// j = 5: Compare 8 and 6 → Swap → noSwaps = false
// j = 6: Compare 8 and 7 → Swap → noSwaps = false



// After the inner loop, noSwaps is checked.
// Since swaps were made, noSwaps = false, and the outer loop does not break.
// The array at the end of this iteration: [1, 2, 3, 4, 5, 6, 7, 8]



// Second Iteration of the Outer Loop
// Set noSwaps = true Again:


// noSwaps is set to true again at the beginning of this iteration.
// Inner Loop Execution (Second Iteration):

// The inner loop runs from j = 0 to j < i - 1 (now i - 1 = 6):
// j = 0: Compare 1 and 2 → No swap → noSwaps = true
// j = 1: Compare 2 and 3 → No swap → noSwaps = true
// j = 2: Compare 3 and 4 → No swap → noSwaps = true
// j = 3: Compare 4 and 5 → No swap → noSwaps = true
// j = 4: Compare 5 and 6 → No swap → noSwaps = true
// j = 5: Compare 6 and 7 → No swap → noSwaps = true



// End of Second Outer Loop Iteration:

// After the inner loop, noSwaps is checked.
// Since no swaps were made, noSwaps = true, and the outer loop does break.








// Why the Outer Loop Doesn't Break Immediately
// First Iteration:

// noSwaps is set to true before the inner loop starts.
// The inner loop makes swaps, so noSwaps is set to false.
// The if (noSwaps) break; check fails (since noSwaps is false), so the outer loop continues.
// Second Iteration:

// noSwaps is set to true again before the inner loop starts.
// The inner loop makes no swaps, so noSwaps remains true.
// The if (noSwaps) break; check passes (since noSwaps is true), so the outer loop breaks.
// The outer loop does not break at the beginning because noSwaps is checked after the inner loop completes. The flag is reset to true to check if any swaps happen during the inner loop. If no swaps happen (noSwaps remains true), it breaks out of the outer loop. Otherwise, it continues to the next iteration.

// Key Takeaway
// noSwaps = true is a starting assumption at the beginning of each outer loop iteration.
// The inner loop potentially changes this assumption based on whether swaps occur.
// The break condition is checked after the inner loop has run, not before.
// Does this make the flow and purpose of the noSwaps flag clearer?