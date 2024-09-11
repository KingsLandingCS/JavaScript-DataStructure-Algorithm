function pyramidFunction(rows) {
    for (let i = 1; i <= rows; i++) {
        let space = " ".repeat(rows - i);
        let stars = "*".repeat(2 * i - 1);
        console.log(space + stars);
    }
}

pyramidFunction(10);



// 1. printPyramid(rows)
// This is the main function that generates and prints the pyramid.The parameter rows determines how tall the pyramid will be.

// 2. for (let i = 1; i <= rows; i++)
// This for loop iterates over each row of the pyramid, starting from row 1 and going up to rows.Each iteration represents a single row of the pyramid.

// i is the current row number.
// rows is the total number of rows(5 in this case).
//     Now, let's examine what happens in each iteration.

// 3. let space = ' '.repeat(rows - i);
// In each row, before the stars(*) are printed, we need spaces(' ') to center the stars in a pyramid shape.
//     rows - i calculates the number of spaces needed.The higher the row number(i), the fewer spaces are required.
// For example, in row 1, rows - i = 5 - 1 = 4 spaces are needed.
// In row 2, rows - i = 5 - 2 = 3 spaces, and so on.
// The repeat method repeats the space character ' ' the calculated number of times.

// 4. let stars = '*'.repeat(2 * i - 1);
// After the spaces, the stars are printed.The number of stars depends on the row number(i).
// 2 * i - 1 determines how many stars will be printed in the current row.
// For example, in row 1, 2 * i - 1 = 2 * 1 - 1 = 1 star is printed.
// In row 2, 2 * i - 1 = 2 * 2 - 1 = 3 stars are printed, and so on.
// The repeat method repeats the '*' character the calculated number of times.

// 5. console.log(space + stars);
// This statement prints the spaces and stars combined for the current row.This creates the pyramid structure by aligning the stars in the center.

// Iteration Breakdown
// Let's go through each iteration when rows = 5:

// Iteration 1:
// i = 1
// space = ' '.repeat(5 - 1) = ' '.repeat(4) = ' '(4 spaces)
// stars = '*'.repeat(2 * 1 - 1) = '*'.repeat(1) = '*'(1 star)
// console.log(space + stars) prints: " *"
// Output:

// markdown
// Copy code
//     *
//     Iteration 2:
// i = 2
// space = ' '.repeat(5 - 2) = ' '.repeat(3) = ' '(3 spaces)
// stars = '*'.repeat(2 * 2 - 1) = '*'.repeat(3) = '***'(3 stars)
// console.log(space + stars) prints: " ***"
// Output:

// markdown
// Copy code
//     *
//    ***
//     Iteration 3:
// i = 3
// space = ' '.repeat(5 - 3) = ' '.repeat(2) = ' '(2 spaces)
// stars = '*'.repeat(2 * 3 - 1) = '*'.repeat(5) = '*****'(5 stars)
// console.log(space + stars) prints: " *****"
// Output:

// markdown
// Copy code
//     *
//    ***
//   *****
//     Iteration 4:
// i = 4
// space = ' '.repeat(5 - 4) = ' '.repeat(1) = ' '(1 space)
// stars = '*'.repeat(2 * 4 - 1) = '*'.repeat(7) = '*******'(7 stars)
// console.log(space + stars) prints: " *******"
// Output:

// markdown
// Copy code
//     *
//    ***
//   *****
//  *******
//     Iteration 5:
// i = 5
// space = ' '.repeat(5 - 5) = ' '.repeat(0) = ''(no spaces)
// stars = '*'.repeat(2 * 5 - 1) = '*'.repeat(9) = '*********'(9 stars)
// console.log(space + stars) prints: "*********"
// Final output:

// markdown
// Copy code
//     *
//    ***
//   *****
//  *******
// *********
//     Overall Flow:
// In the first row, 4 spaces and 1 star are printed.
// In the second row, 3 spaces and 3 stars are printed.
// This pattern continues until the last row, where 0 spaces and 9 stars are printed.
// This creates the shape of a centered pyramid in the terminal.