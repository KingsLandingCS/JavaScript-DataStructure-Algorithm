function intersectionOfTwoArrays(arr1, arr2) {
    let set1 = new Set(arr1);
    let resultSet = [];

    for (let item of arr2) {
        if (set1.has(item)) {
            resultSet.push(item);
        }
    }
    return resultSet;
}

console.log(intersectionOfTwoArrays([6, 3, 5, 9, 1, 8, 18], [22, 8, 5, 48, 44, 24]));