let number = 1;
let result = [];

while (number <= 101) {
    if (result.length < 10 ) {
        result.push(number);
        number++;
    } else {
        document.write("Los números entre " + (number - 10) + " y " + (number - 1) + " son: " + result + "<br>");
        result = [];
    }
}

