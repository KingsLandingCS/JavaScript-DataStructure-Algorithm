function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    console.log(newArr);
    return newArr;

}

double([1, 2, 3]);
