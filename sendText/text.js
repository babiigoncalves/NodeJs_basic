var text;

loadText = function (callback) {
    setTimeout( function() {
    text = "Hi there!";
    callback();
    }, 3000)
}

printText = function () {
    console.log(text);
}

loadText(printText);

console.log("Hi!");