let numbers = [];
let counter = 10;



function isMultiple(number, multiple) {
    return number%multiple  === 0;
}

while (counter < 100) {
    if (isMultiple(counter, 7)) {
        numbers.push(counter);
    }
    counter++;
}

document.write(numbers)