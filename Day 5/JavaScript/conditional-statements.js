var number = 50;
var number1 = 35;
var number2 = 30;

// if condition
if (number % 2 == 0) {
    console.log(`${number} is even`);
}

// if-else condition
if (number1 % 2 == 0) {
    console.log(`${number1} is even`);
} else {
    console.log(`${number1} is odd`);
}

// if else ladder
if (number1 % 2 == 0) {
    console.log(`${number1} is divisible by 2`);
} else if (number1 % 5 == 0) {
    console.log(`${number1} is divisible by 5`);
} else {
    console.log(`${number1} is not divisible by 2 & 5`);
}

// nested-if-else
if (number1 > number) {
    if (number1 > number2) {
        console.log(`${number1} is greatest`);
    } else {
        console.log(`${number2} is greatest`);
    }
} else {
    if (number > number2) {
        console.log(`${number} is greatest`);
    }
}