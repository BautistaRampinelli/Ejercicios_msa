let numbers = [];
let number = 1;


function isMultipleOfSeven() {
    return number%7 === 0;
}




while (number <= 100) {
    
    if (isMultipleOfSeven() && number%10 == 0) {
        numbers.push("FelizDomingo");
    } else if (isMultipleOfSeven()) {
            numbers.push("Domingo");
    } else if (number%10 == 0) {
    numbers.push("Feliz");
    } else {
        numbers.push(number);
    }
    number++;
}

console.log(numbers);
