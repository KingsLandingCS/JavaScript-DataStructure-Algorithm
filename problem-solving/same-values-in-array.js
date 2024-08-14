function countOccurrences(arr) {
    const Occurrences = {};
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (Occurrences.hasOwnProperty(num)) {
            Occurrences[num]++;
        } else {
            Occurrences[num] = 1;
        }
    }
    return Occurrences;
}

console.log(countOccurrences([1, 2, 3, 2, 4, 3, 2, 1, 4, 5]));



// Iteration by Iteration Breakdown:
// First Iteration (i = 0):

// num = arr[0] = 1.
// We check if (occurrences[1]). Since occurrences is empty, this condition is false.
// We then execute the else block, setting occurrences[1] = 1.
// Result: occurrences = {1: 1}.
// Second Iteration (i = 1):

// num = arr[1] = 2.
// We check if (occurrences[2]). This is false because occurrences doesn’t yet have a key 2.
// We set occurrences[2] = 1.
// Result: occurrences = {1: 1, 2: 1}.
// Third Iteration (i = 2):

// num = arr[2] = 3.
// We check if (occurrences[3]). This is false because occurrences doesn’t have a key 3.
// We set occurrences[3] = 1.
// Result: occurrences = {1: 1, 2: 1, 3: 1}.
// Fourth Iteration (i = 3):

// num = arr[3] = 2.
// We check if (occurrences[2]). This is true because occurrences[2] is 1.
// We execute the if block, incrementing occurrences[2] by 1 (occurrences[2]++).
// Result: occurrences = {1: 1, 2: 2, 3: 1}.
// Fifth Iteration (i = 4):

// num = arr[4] = 4.
// We check if (occurrences[4]). This is false because occurrences doesn’t have a key 4.
// We set occurrences[4] = 1.
// Result: occurrences = {1: 1, 2: 2, 3: 1, 4: 1}.
// Sixth Iteration (i = 5):

// num = arr[5] = 3.
// We check if (occurrences[3]). This is true because occurrences[3] is 1.
// We increment occurrences[3] by 1 (occurrences[3]++).
// Result: occurrences = {1: 1, 2: 2, 3: 2, 4: 1}.
// Seventh Iteration (i = 6):

// num = arr[6] = 2.
// We check if (occurrences[2]). This is true because occurrences[2] is 2.
// We increment occurrences[2] by 1 (occurrences[2]++).
// Result: occurrences = {1: 1, 2: 3, 3: 2, 4: 1}.
// Eighth Iteration (i = 7):

// num = arr[7] = 1.
// We check if (occurrences[1]). This is true because occurrences[1] is 1.
// We increment occurrences[1] by 1 (occurrences[1]++).
// Result: occurrences = {1: 2, 2: 3, 3: 2, 4: 1}.
// Ninth Iteration (i = 8):

// num = arr[8] = 4.
// We check if (occurrences[4]). This is true because occurrences[4] is 1.
// We increment occurrences[4] by 1 (occurrences[4]++).
// Result: occurrences = {1: 2, 2: 3, 3: 2, 4: 2}.
// Tenth Iteration (i = 9):

// num = arr[9] = 5.
// We check if (occurrences[5]). This is false because occurrences doesn’t have a key 5.
// We set occurrences[5] = 1.
// Result: occurrences = {1: 2, 2: 3, 3: 2, 4: 2, 5: 1}.
// Final Output:
// After the loop completes, the occurrences object contains the count of each number in the array: