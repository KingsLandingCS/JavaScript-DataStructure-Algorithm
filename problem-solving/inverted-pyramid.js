function invertedPyramid(rows) {
    for (let i = rows; i >= 1; i--) {
        let spaces = " ".repeat(rows - i);
        let stars = "*".repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

invertedPyramid(5);