function removeOccurrences(str) {
    // Remove all occurrences of 'b'
    let result = str.replace(/b/g, '');
  
    // Continuously remove all occurrences of 'ac' until none are left
    let prevResult;
    do {
      prevResult = result;
      result = result.replace(/ac/g, '');
    } while (result !== prevResult);
  
    return result;
  }
  
  // Example usage:
  const input = "ccbaabccababcbbaabcaaabbcccbaabcccbaabacacabababcabcab";
  const output = removeOccurrences(input);
  console.log(output); // Output: "caa"




//   Initial Input: "cabbaabcca"
//   After Removing 'b':
//   The result is "caacaaca"
//   2. Removing All Occurrences of 'ac' Repeatedly
//   First Iteration:
  
//   prevResult = "caacaaca"
//   Remove 'ac':
//   "caacaaca" → "caaca"
//   Result after this step: "caaca"
//   Second Iteration:
  
//   prevResult = "caaca"
//   Remove 'ac':
//   "caaca" → "caa"
//   Result after this step: "caa"
//   Third Iteration:
  
//   prevResult = "caa"
//   Remove 'ac':
//   There are no occurrences of 'ac' left in "caa".
//   Result remains: "caa"




// Key Points:
//==============================================
// Purpose of prevResult:

// prevResult stores the state of the result string from the previous iteration of the loop.
// By comparing prevResult with result at the end of each iteration, the loop determines whether any changes were made.
// Process of Updating and Checking:

// Initialization
// let prevResult;:
// Declares the variable prevResult which will be used to store the string before modifications in each iteration.
// First Iteration
// prevResult = result;:

// Sets prevResult to the current value of result before performing any replacements.
// result = result.replace(/ac/g, '');:

// Removes all occurrences of "ac" from result.
// Loop Check:

// After the replacement, the loop checks if result is different from prevResult.
// If result has changed (i.e., "ac" was removed and thus altered the string), the loop continues to the next iteration.
// If result is the same as prevResult (i.e., no changes occurred), the loop exits.
// Subsequent Iterations
// In each iteration:
// Update prevResult:

// prevResult = result;: Updates prevResult to the current state of result before the next replacement.
// Perform Replacement:

// result = result.replace(/ac/g, '');: Removes all remaining occurrences of "ac" from result.
// Loop Check:

// Compares the updated result with the newly updated prevResult.
// If they are different, it means further removal of "ac" was successful, and the loop continues.
// If they are the same, it means no more "ac" substrings are present, and the loop stops.



// do-while loop
// ==============
// Execute the Code Block: The code inside the do block runs first, before any condition check.
// Evaluate the Condition: After executing the code block, the condition in the while statement is evaluated.
// Repeat or Exit:
// If the condition evaluates to true, the loop continues, and the code block is executed again.
// If the condition evaluates to false, the loop exits, and control moves to the code following the loop.



// Why Declare prevResult Outside the Loop?
// =========================================  
// Initialization Before Loop Execution:

// prevResult needs to be initialized to a value before the loop starts. This initialization is done outside the loop so that it has a valid value for comparison when the loop first executes.
// Maintain State Across Iterations:

// By declaring prevResult outside the loop, you ensure that its value persists across multiple iterations. This allows the loop to compare the result string's state from the end of the previous iteration to its state at the beginning of the current iteration.