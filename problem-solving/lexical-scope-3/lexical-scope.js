let count = 0;

(function printCount() {
    if (count === 0) {
        let count = 1;  // shadowing ===> it will overlap with the outer scope
        console.log(count); // it will print 1
    }
    console.log(count); // it will print 0
})();