function pivot(arr, start = 0, end = arr.length - 1) {    //start = 0: This means that if the caller does not provide a value for start, it will default to 0.
    // end = arr.length - 1: This means that if the caller does not provide a value for end, it will default to arr.length - 1, which is the last index of the array arr.
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    console.log(`Orginal Array: ${arr}`);
    for (let i = start + 1; i <= end; i++) {
        console.log(`Iteration ${i}: ${arr}`);
        if (pivot > arr[i]) {
            swapIdx++;
            console.log(`Swap: ${swapIdx} and ${i}`);
            swap(arr, swapIdx, i);
            console.log(`Results of loop at iteration ${i}: ${arr}`);
        }
    }
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx); // the swapIdx is 3 here because of the manipulation in for loop above, and arr will updated too. Start will be 0 though. There will be final swap call to update the pivot position.
    return `${arr} Pivot: ${pivot} SwapIdx: ${swapIdx}`;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3])); 