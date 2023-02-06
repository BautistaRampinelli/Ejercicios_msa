let numbersOdd = [];
let number = 100;


function isOdd () {
    return (number+1)%2 === 0;
}

while (numbersOdd.length <= 6) {
    if (isOdd()) {
        numbersOdd.push(number);
    }
    number++;
}

document.write(numbersOdd);