let numbers = [1, 2, 4, 7, 6, 3, 10];
console.log(`Numbers are as follows: ${numbers}`);

let doubled = numbers.map(num => num * 2);
console.log(`Doubled numbers are as follows: ${doubled}`);

let squared = numbers.map(num => num ** 2);
console.log(`Squared numbers are as follows: ${squared}`);

let names = ["Akshay", "Ajay", "Pavan", "Murthy", "Sudeep", "Sandy"];
console.log(`Original Names: ${names}`)

let upperCaseNames = names.map(name => name.toUpperCase());
console.log(`Names in Upper case: ${upperCaseNames}`)

// Changing names to camelCase
let normalName = ["Virat Kohli", "Sachin Tendulkar", "Rohit Sharma"];
console.log(`Normal Names: ${normalName}`);

let camelCase = normalName.map(names => {
    return names.toLowerCase().split(' ')
                .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('');
});
console.log(`Names in camelCase: ${camelCase}`);

// Filter method
let someNumbers = [1, 2, 4, 7, 6, 3, 10];
console.log(`Numbers: ${someNumbers}`);

let evenNumbers = someNumbers.filter(num => num % 2 === 0 );
console.log(`Even Numbers: ${evenNumbers}`);

let oddNumbers = someNumbers.filter(num => num % 2 != 0 );
console.log(`Odd Numbers: ${oddNumbers}`);

let moreThan4 = someNumbers.filter(num => num > 4);
console.log(`Numbers greater than 4: ${moreThan4}`);

let words = ["Alphabet", "Autonomous", "Bibliography", "Caterpillar", "Doodle", "Dedication"];
console.log(`Original Words: ${words}`);

let wordsWithA = words.filter(word => word.startsWith("A"));
console.log(`Words starting with A: ${wordsWithA}`);

let longWords = words.filter(word => word.length > 10);
console.log(`Words with more than 10 characters: ${longWords}`);

// Reduce Method
let randomNumbers = [1, 7, 11, 15, 23, 27, 34];
console.log(`Some Numbers: ${randomNumbers}`);

let sumOfNumbers = randomNumbers.reduce((total, number) => total + number, 0);
console.log(`Sum of given numbers: ${sumOfNumbers}`);

let productOfNumbers = randomNumbers.reduce((product, number) => product * number, 1);
console.log(`Product of given numbers: ${productOfNumbers}`);

let largeNumber = randomNumbers.reduce((max, number) => Math.max(max, number), randomNumbers[0]);
console.log(`Largest number: ${largeNumber}`);

let smallNumber = randomNumbers.reduce((min, number) => Math.min(min, number), randomNumbers[0]);
console.log(`Smallest number: ${smallNumber}`);