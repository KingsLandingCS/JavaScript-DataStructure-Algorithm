function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    // Return null if the array is shorter than the number of elements to sum
    if (arr.length < num) return null;

    // Calculate the sum of the first 'num' elements
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];  // Add the current element to maxSum
    }

    tempSum = maxSum;  // Set the initial window sum to maxSum


    // Slide the window across the array                                                
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);           // stroing max sum                                                                                                                      
    }

    return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));


