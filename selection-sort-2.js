function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Outer loop iteration: ${i}\n`);
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            console.log(`J: ${arr[j]}, lowest: ${arr[lowest]}`);
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
            console.log(`Inner loop comparison: [${arr}], checking if value of j greater or lower ${arr[j]}, ${arr[lowest]}, smallest value at index: ${lowest}\n`);
        }
        if (i !== lowest) {         // ==> Avoid Unnecessary Swaps: If the smallest element in the unsorted portion of the array is already in the position i, swapping it with itself would be redundant and wasteful.The check if (i !== lowest) ensures that we only perform a swap if the smallest element is not already at the current position i.
            console.log(`${i}, ${lowest}\n`);
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
            console.log(`${arr}`);
        }
    }
    return arr;
}

selectionSort([0, 2, 34, 22, 10, 19, 17]);