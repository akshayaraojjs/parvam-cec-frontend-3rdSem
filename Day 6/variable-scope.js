// Global Variables
var semester = 3;
let sem = 3;
// JavaScript is Case-Sensitive
const Sem = 3;

// Global Scope
console.log(`(Var) Currently I'm studying in Sem: ${semester}`);
console.log(`(Let) Currently I'm studying in Sem: ${sem}`);
console.log(`(Const) Currently I'm studying in Sem: ${Sem}`);

// Block Scope
{
    var fullname = "Akshay";
    console.log(`var fullname in block: ${fullname}`);
    let fullName = "Akshay Rao";
    console.log(`let fullName in block: ${fullName}`);
    const FullName = "Akshay Rao J";
    console.log(`const FullName in block: ${FullName}`);
}

function showVariables(){
    let fullName = "FunctionBlock Name: Akshay (let)";
    const FullName = "FunctionBlock Name: Akshay (const)";
    console.log(`(Var) Full Name: ${fullname}`);
    // Throws error as let variable - fullName is declared out of the function scope under block scope
    console.log(`(Let) Full Name: ${fullName}`); 
    // Throws error as const variable - FullName is declared out of the function scope under block scope
    console.log(`(Const) Full Name: ${FullName}`);
}

showVariables();

// Function Scope
function printVariables(){
    var collegename = "CEC";
    let collegeName = "CEC";
    const CollegeName = "CEC";

    // function variables can be accessed within the function
    console.log(`Inside function:`);
    console.log(`var College: ${collegename}`);
    console.log(`let College: ${collegeName}`);
    console.log(`const College: ${CollegeName}`);
}

printVariables();

// Out of the function, I can't access var, let and const variables
// console.log(`Outside function:`);
// console.log(`var College: ${collegename}`);
// console.log(`let College: ${collegeName}`);
// console.log(`const College: ${CollegeName}`);