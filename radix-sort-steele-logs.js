// Helper Function
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Helper Function 2
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Helper Function 3
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

// radixSort
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => []); // create an array of 10 empty arrays
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k); // get the digit in position k
            // console.log(`On Interation ${k}, for number ${nums[i]} digit is ${digit}`);
            digitBuckets[digit].push(nums[i]);  // put the number in the corresponding bucket
            // console.log(`${digitBuckets}`);
        }

        // console.log(`nums after the completion of for loop ${nums}`);
        console.log(digitBuckets);
        nums = [].concat(...digitBuckets); // flattens the array into one array, ...digitBuckets: The spread operator ... is used to "spread" or "unpack" the elements of an array. When you write ...digitBuckets, it effectively turns the array digitBuckets into its individual elements. So, instead of passing a single array digitBuckets to concat(), the spread operator passes each of the inner arrays as separate arguments to concat(). Specifically, it converts digitBuckets into this: [], [], [12, 9852], [23], [], [345, 2345], [], [5467], [], []
        console.log(nums);
    }
    return nums;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));



// Understanding Buckets
// In radix sort, buckets are indexed from 0 to 9, corresponding to possible digits in a base-10 system. The digit itself determines the bucket:

// Bucket 0 holds numbers whose relevant digit is 0.
// Bucket 1 holds numbers whose relevant digit is 1.
// Bucket 2 holds numbers whose relevant digit is 2.
// Bucket 3 holds numbers whose relevant digit is 3.
// And so on up to Bucket 9.