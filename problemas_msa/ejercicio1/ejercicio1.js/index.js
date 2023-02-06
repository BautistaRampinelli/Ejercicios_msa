let numbers = [];
let number = 0;

function evenOrOdd () {
    return number%2 === 0;
}

while (numbers.length <= 6) {
    if (evenOrOdd()) {
        numbers.push(number)
    }
    number++;
}

document.write(numbers)
