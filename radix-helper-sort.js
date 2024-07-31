function getDigit(num, i) {
    return num = Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

console.log(getDigit(7323, 2));


