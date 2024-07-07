function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                //SWAP!
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            console.log(arr);
        }
        console.log(`After ${(i + 1)} iteration of i: ${arr}`);
    }
    return arr;
}

bubbleSort([37, 45, 29, 8]);