// FizzBuzz Challenge Part 1 

for (let i = 0; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizzbuz");
    } else if (i % 3 === 0) {
        console.log ("Fizz");
    } else if ( i % 5 ===0) {
        console.log ("Buzz");
    } else {
        console.log (i);
    }
}

console.log(5)

// Part 2

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false; 
    if (num <= 3) return true; 

    if (num % 2 === 0 || num % 3 === 0) return false; 

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false; 
    }
    return true; 
}

// Function to find the next prime number after n
function findNextPrime(n) {
    let nextNumber = n + 1; 
    while (true) {
        if (isPrime(nextNumber)) {
            console.log(`The next prime number after ${n} is ${nextNumber}.`);
            break; 
        }
        nextNumber++; 
    }
}


let n = 9; 
findNextPrime(n); 