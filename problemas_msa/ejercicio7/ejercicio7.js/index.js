let numbers = []
let number = 1


function isPerfectNumber (number) {
    divisors = 0
    for (let i = 1; i <= number/2; ++i ) {
        if (number % i == 0) {
            divisors += i;
        }
    }
    return divisors == number;
}

while (number <= 100000) {
    if (isPerfectNumber(number)){
        numbers.push(number);
    }
    number++;
}

console.log(numbers);