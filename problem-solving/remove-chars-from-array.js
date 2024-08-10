function removeChars(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        // if the current character is 'b' skip it
        if (str[i] === 'b') {
            continue;
        }
        //if the current character is 'a' and the next character is 'c' skip both
        if (str[i] === 'a' && str[i + 1] === 'c') {
            i++;
            continue;
        }
        //otherwise, add the character to the result
        result += str[i];
    }
    return result;
}

console.log(removeChars('cabbaabcca'));
console.log(removeChars('ab')); // 'a'
console.log(removeChars('abc')); // ''


//the continue statement is used to skip the current iteration of the loop and move on to the next iteration without executing the remaining code within the loop for that iteration.

