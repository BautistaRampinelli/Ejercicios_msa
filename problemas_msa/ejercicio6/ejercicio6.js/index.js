let numbers = [0, 1]; 

for (let i = 2; i <= 1000000; i++) {
    numbers.push(numbers[i-1]%100000 + numbers[i-2]%100000);
}

console.log(numbers[1000000]%100000);


