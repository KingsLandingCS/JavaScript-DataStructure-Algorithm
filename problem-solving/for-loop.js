function mySum(val) {
    sum = val[0];
    console.log(`Sum = ${sum}`);
    for (let i = 0; i < val.length; i++) {
        console.log(`val[${i}] = ${val[i]}`);
        sum = sum + val[i];
        console.log(`Sum = ${sum}`);
    
    }
    return val;
}


mySum([1, 2, 5, 6, 5, 8]);
