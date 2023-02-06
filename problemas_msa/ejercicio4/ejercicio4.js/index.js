let numbers = [];
let number = 1;


function verifyPrimeNumber (num) {
    let primeNumber = true;
    for (i = 2; i < num/2; i++) {
        if (num%i === 0) {
            primeNumber = false;
        }
    }
    return primeNumber;
}


function test() {
    if (verifyPrimeNumber(2976221)) {
        console.log("Ok");
    } else {
        console.error("Fail");
        alert(`Error en la función verifyPrimeNumber`);
    }
}
test();

while (number <= 100000) {
    if (verifyPrimeNumber(number) && number%10 == 1) {
        numbers.push(number);
    }
    number++;
}

console.log(numbers);
document.write(numbers);

