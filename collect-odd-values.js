function collectOddValues(arr) {
    let newArr = [];
    if (arr.length === 0) {
        return newArr;
    }
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1, 2, 3, 4, 5]);



// Example Execution
// Let's walk through the execution of collectOddValues([1, 2, 3, 4, 5]):

// Initial call: collectOddValues([1, 2, 3, 4, 5])

// newArr = []
// arr[0] is 1, which is odd, so newArr = [1]
// Recursive call with [2, 3, 4, 5]
// Recursive call: collectOddValues([2, 3, 4, 5])

// newArr = []
// arr[0] is 2, which is even, so newArr remains []
// Recursive call with [3, 4, 5]
// Recursive call: collectOddValues([3, 4, 5])

// newArr = []
// arr[0] is 3, which is odd, so newArr = [3]
// Recursive call with [4, 5]
// Recursive call: collectOddValues([4, 5])

// newArr = []
// arr[0] is 4, which is even, so newArr remains []
// Recursive call with [5]
// Recursive call: collectOddValues([5])

// newArr = []
// arr[0] is 5, which is odd, so newArr = [5]
// Recursive call with [] (empty array)
// Base case: collectOddValues([])

// arr.length is 0, so return []
// Now we unwind the recursion:

// From collectOddValues([5]), we get [5]
// From collectOddValues([4, 5]), we concatenate [] with [5] to get [5]
// From collectOddValues([3, 4, 5]), we concatenate [3] with [5] to get [3, 5]
// From collectOddValues([2, 3, 4, 5]), we concatenate [] with [3, 5] to get [3, 5]
// From collectOddValues([1, 2, 3, 4, 5]), we concatenate [1] with [3, 5] to get [1, 3, 5]
// So, the final result is [1, 3, 5], which is the array of odd values from the original array.



// Conclusion
// Each recursive call processes one element and then calls itself with the rest of the array. The base case ensures that the recursion stops when the array is empty. As the recursion unwinds, each call combines its result (if the element was odd) with the results of the subsequent calls, building up the final array of odd numbers. This is how the function ultimately returns [1, 3, 5] for the input [1, 2, 3, 4, 5].