function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Outer loop iteration: ${i}`);
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
            console.log(`Inner loop comparison: [${arr}], ${arr[j]}, ${arr[lowest]}, ${lowest}`);
        }

        console.log(`****************************`);

        console.log(`[${arr}]`);
        console.log(`Swapping To: `);

        let temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;

        console.log(`[${arr}]`);

        console.log(`****************************`);
    }
    return arr;
}

selectionSort([34, 22, 10, 19, 17]);