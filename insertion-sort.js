function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i]; 
        let j = i - 1;
        while (j >= 0 && arr[j] > currentVal) {   //This loop runs as long as j is within bounds (j >= 0) and the element at arr[j] is greater than currentVal.
            arr[j + 1] = arr[j];
            j--;
            console.log(`Array after manipulation in inner loop: ${arr}`); // Debugging line
        }
        arr[j + 1] = currentVal;  //If j is either less than currentVal or out of bounds of array (j<0), the loop breaks/exits, but the index of j will remain the same so in the expression below "arr[j + 1] = currentVal;" for example if j's loop exited after the second iteration of outer loop, the j's index will be counted like this in the express below arr[1 + 1] = currentVal; And if the the loop doesn't breaks out, j will be decremented by j--; and then expression below will be computed.
        console.log(`Array after manipulation in outer loop: ${arr}\n`);
    }
    return arr;
}

insertionSort([2, 1, 9, 76, 4]);