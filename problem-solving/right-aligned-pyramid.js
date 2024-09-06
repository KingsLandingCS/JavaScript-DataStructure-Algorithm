let i, j, k;
const height = 5; // height of the pyramid

for (i = 1; i <= height; i++) {
    let line = '';
    // Print spaces
    for (j = 1; j <= height - i; j++) {
        line += ' '; // Add spaces
    }
    // Print stars
    for (k = 1; k <= i; k++) {
        line += '*'; // Add stars
    }
    console.log(line); // Print the line to the terminal
}

// Variables:
// height: Specifies the total number of rows in the pyramid.
// i: Controls the current row number.
// j: Controls the number of spaces in the current row.
// k: Controls the number of stars in the current row.



// Detailed Iteration Explanation:
// Iteration 1 (i = 1):
// Initialize line: line = ''
// Spaces Loop (j):
// j = 1 to 4 (because height - i = 5 - 1 = 4)
// line becomes ' ' (4 spaces)
// Stars Loop (k):
// k = 1 to 1 (because i = 1)
// line becomes ' *'
// Output: console.log(' *')
// Iteration 2 (i = 2):
// Initialize line: line = ''
// Spaces Loop (j):
// j = 1 to 3 (because height - i = 5 - 2 = 3)
// line becomes ' ' (3 spaces)
// Stars Loop (k):
// k = 1 to 2 (because i = 2)
// line becomes ' **'
// Output: console.log(' **')
// Iteration 3 (i = 3):
// Initialize line: line = ''
// Spaces Loop (j):
// j = 1 to 2 (because height - i = 5 - 3 = 2)
// line becomes ' ' (2 spaces)
// Stars Loop (k):
// k = 1 to 3 (because i = 3)
// line becomes ' ***'
// Output: console.log(' ***')
// Iteration 4 (i = 4):
// Initialize line: line = ''
// Spaces Loop (j):
// j = 1 to 1 (because height - i = 5 - 4 = 1)
// line becomes ' ' (1 space)
// Stars Loop (k):
// k = 1 to 4 (because i = 4)
// line becomes ' ****'
// Output: console.log(' ****')
// Iteration 5 (i = 5):
// Initialize line: line = ''
// Spaces Loop (j):
// j = 1 to 0 (because height - i = 5 - 5 = 0)
// line remains '' (no spaces)
// Stars Loop (k):
// k = 1 to 5 (because i = 5)
// line becomes '*****'
// Output: console.log('*****')