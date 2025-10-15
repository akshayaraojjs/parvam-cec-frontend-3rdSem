let fullName = "Akshay Rao.J";
console.log(`My name is ${fullName}`);

// length method is used to check the size of the string
console.log(`Length of ${fullName}: ${fullName.length}`);

// To access the character, we can use the index
console.log(`${fullName[0]} is present at 1st index`);
console.log(`${fullName[3]} is present at 3rd index`);

// We can use charAt() method as well
console.log(`${fullName.charAt(2)} is present at 2nd index`);

let sentence = `We are learning the Frontend concepts like HTML, CSS, JS & React. The bootstrap is used for making the responsive websites.`;

console.log(`${sentence}`);

// indexOf("word") is used to check the index of the given word
console.log(`Frontend word is present at: ${sentence.indexOf("Frontend")} position`);

// first position
console.log(`"the" word is present at: ${sentence.indexOf("the")} position`);

// last position
// lastIndexOf("word") is used to check the index of the given word
console.log(`"the" word is present at: ${sentence.lastIndexOf("the")} position`);

// startsWith() method is used to check whether the string starts with given word
console.log(`Sentence starts with "We"? ${sentence.startsWith("We")}`);

console.log(`Sentence starts with "The"? ${sentence.startsWith("The")}`);

// endsWith() method checks whether the string ends with the given word
// Example:
let email1 = "user@gmail.com";
let email2 = "admissions@cec.ac.in";

console.log(`Email ends with "com"? ${email1.endsWith("com")}`);
console.log(`Email ends with "com"? ${email2.endsWith("com")}`);

// Case Transformation
let branch = "Computer Science & Engineering";

// toUpperCase() for changing the string to Upper case
// toLowerCase() for changing the string to Lower case
console.log(`Branch name in Uppercase: ${branch.toUpperCase()}`);
console.log(`Branch name in Lowercase: ${branch.toLowerCase()}`);

// trim() method is used to remove the whitespaces
let word = "   City Engineering College   ";
console.log(`Original Word: ${word}`);

console.log(`Removed whitespace at the beginning: ${word.trimStart()}`);

console.log(`Removed whitespace at the end: ${word.trimEnd()}`);

console.log(`Removed whitespace from the word: ${word.trim()}`);

let sentence1 = "I'm studying in 3rd Sem. I'm learning the Frontend concepts. I'm working on the mini project."

console.log(`Original Sentence: ${sentence1}`);

// First occurence will be replaced when replace() method is used
// Syntax: replace("old", "new")
console.log(`Modified Sentence: ${sentence1.replace("I'm", "We're")}`);

// replaceAll() method will replace all the occurences
console.log(`Modified Sentence: ${sentence1.replaceAll("I'm", "We're")}`);