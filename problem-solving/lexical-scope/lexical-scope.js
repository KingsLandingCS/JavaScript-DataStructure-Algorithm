
// global scope

var employee = "John";
function subscribe() {
    var username = "Hello World!";

    // inner scope 
    function displayName(num) {  // ===> this function is closure
        // inner scope 2
        console.log(username, num, employee);
    }

    return displayName;
}

subscribe()(5);