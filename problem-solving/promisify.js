// Original function with an error-first callback
const func = (arg1, arg2, callback) => {
    setTimeout(() => {
        const hasError = false; // change to true to simulate an error
        if (hasError) {
            callback('An error occurred', null);
        } else {
            callback(null, `Success with ${arg1} and ${arg2}`);
        }
    }, 1000);
};

// Promisify the function
const promisedFunc = promisify(func);

// Use the promisified function
promisedFunc('arg1', 'arg2')
    .then((data) => {
        console.log(data); // Handles data
    })
    .catch((error) => {
        console.error(error); // Handles error
    });
