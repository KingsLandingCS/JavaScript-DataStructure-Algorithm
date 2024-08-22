function createCounter() {
    let count = 0;

    return {
        increment: function () {
            count++;
            console.log("Counter: " + count);
        },
        reset: function () {
            count = 0;
            console.log("Counter reset to " + count);
        }
    };
}

const counter = createCounter();

// Usage examples:
counter.increment(); // Counter: 1
counter.increment(); // Counter: 2
counter.reset();     // Counter reset to 0
counter.increment(); // Counter: 1
