function selectionSort(arr) {

    // A helper function to swap elements in the array
    const swap = (arr, idx1, idx2) =>
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);


    for (let i = 0; i < arr.length; i++) {
        // Assume the first unsorted element is the smallest
        let lowest = i;
        console.log(`Outer Loop: ${i}\n`);
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j;
                console.log(`[${arr}], lowest value at index: ${lowest}, ${j}`);
            }
        }

        // Swap operation
        if (i !== lowest) {
            swap(arr, i, lowest);
        }
        console.log(`Outer Loop: ${arr}\n`);
    }
    return arr;
}

selectionSort([0, 2, 34, 22, 10, 19, 17]);