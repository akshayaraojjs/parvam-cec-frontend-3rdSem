// Arrow functions
// Syntax:
// declaration_type functionName = (parameter) => {
//    statements 
// }

let sayHi = () => { console.log(`Hello Students!`); }

sayHi();

let sayHello = (fullName) => {
    console.log(`Hi ${fullName}!`);
}

sayHello("Akshay Rao");
sayHello("Ajay Rao");

let findSum = (num1, num2) => { return num1 + num2 };

n1 = 30, n2 = 40;
console.log(`Sum of ${n1} and ${n2}: ${findSum(n1, n2)}`);
console.log(`Sum: ${findSum(50, 100)}`);

let findCube = (number) => { return number ** 3 };

number = 35;
console.log(`Cube of ${number}: ${findCube(number)}`);
console.log(`Cube: ${findCube(20)}`);

// Ternary Operator:
// (condition) ? "True statement" : "False statement"
let checkEven = (num) => { 
    return (num % 2 == 0) ? true : false 
};

num = 30;
console.log(`Is ${num} a even number? ${checkEven(num)}`);
console.log(`Is 35 a even number? ${checkEven(35)}`);