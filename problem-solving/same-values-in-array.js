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