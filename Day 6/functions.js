// Syntax:
// function declaration & definition
// function funName(parameters){
//     statements
// }

// function call
// funName(argument)
function sayHi(){
    console.log(`Hello Students`);
}

sayHi();
// Function with a Parameter
function sayHello(name){
    console.log(`Hi, ${name}!`);
}

sayHello("Akshay");
sayHello("Ajay");

function findSum(num1, num2){
    return num1 + num2;
}

n1 = 20, n2 = 30;
console.log(`Sum of ${n1} and ${n2}: ${findSum(n1, n2)}`);

function findSquare(num){
    // return num*num;
    return num**2;
}
num = 25;
console.log(`Square of ${num}: ${findSquare(num)}`);

function checkEven(number){
    if(number % 2 == 0){
        return true;
    } else {
        return false;
    }
}
number = 23;
console.log(`Is ${number} a even number? ${checkEven(number)}`);