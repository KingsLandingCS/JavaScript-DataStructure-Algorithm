let counter = 0;

const getData = () => {
    console.log("fetching data", counter++);
}

const doSomeMagic = function (fn, delay) {
    let timer;
    return function () {
        let context = this,
            args = arguments;
        clearTimeout(timer);

        timer = setTimeout(() => {
            getData.apply(context, arguments);
        }, delay)
    }
}

const betterFunction = doSomeMagic(getData, 300);