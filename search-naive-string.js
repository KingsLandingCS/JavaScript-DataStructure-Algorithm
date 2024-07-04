function naiveSearch(long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            console.log(short[j], long[i + j]);
            if (short[j] !== long[i + j]) {
                console.log("BREAK!");
                break;
            }
            if (j === short.length - 1) {
                count++;
                console.log("Found One!");
            }
        }
    }
    return console.log(`The string "${short}" was found ${count} times in the string "${long}"`);  // ===> template literals


    // console.log("The string \"" + short + "\" was found " + count + " times in the string \"" + long + "\""); // ===> without template literals
}

naiveSearch("lorie loled loling lolomoa", "lol");



// Outer Loop Iterations
// When i = 0:

// Starting position in long is 0.
// Inner loop checks:
// j = 0: Compare short[0] ('l') with long[0 + 0] ('l') → match
// j = 1: Compare short[1] ('o') with long[0 + 1] ('o') → match
// j = 2: Compare short[2] ('l') with long[0 + 2] ('r') → mismatch
// Mismatch found, prints "BREAK!" and exits inner loop.




// Purpose of count
// Counting Occurrences:

// The primary purpose of count is to count the number of successful matches of the short string in the long string.
// Each time the inner loop completes without breaking (i.e., a full match is found), count is incremented.
// Output:

// After the function has checked all possible positions in long, count will hold the total number of times short appears in long.
// The function returns count as the result.