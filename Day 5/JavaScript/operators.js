var num1 = 20; // number
var num2 = 60;
var num3 = "20"; // string

var sum = num1 + num2;
var difference = num2 - num1;
var product = num1 * num2;
var quotient = num2 / num1;
var remainder = num2 % num1;
// Power operator (**)
var power = num1 ** 2;

console.log("Sum of " + num1 + " and " + num2 + " :" + sum);
// Template Literals
console.log(`Sum of ${num1} and ${num2}: ${sum}`);
console.log(`Difference of ${num2} and ${num1}: ${difference}`);
console.log(`Product of ${num1} and ${num2}: ${product}`);
console.log(`Quotient of ${num2} and ${num1}: ${quotient}`);
console.log(`Remainder of ${num2} and ${num1}: ${remainder}`);
console.log(`${num1} to the power 2: ${power}`);

console.log(`${num1} is greater than ${num2}: ${num1 > num2}`)
console.log(`${num1} is lesser than ${num2}: ${num1 < num2}`)
console.log(`${num1} is equal to ${num2}: ${num1 == num2}`)
console.log(`${num1} is not equal to ${num2}: ${num1 != num2}`)
// == will check only value irrespective of the type
console.log(`${num1} is equal to ${num3}: ${num1 == num3}`)
// === will check the value along with type
console.log(`${num1} is strictly equal to ${num1}: ${num1 === num3}`)

// Ctrl + Shift + ~ : Open Terminal