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