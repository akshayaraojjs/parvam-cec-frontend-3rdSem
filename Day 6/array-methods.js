let fruits = ["Apple", "Banana", "Chickoo"];
console.log(`Fruits are as follows: ${fruits}`);

// Add new fruit at the beginning: unshift()
fruits.unshift("Cherry");
console.log(`After unshift(): Fruits are as follows:  ${fruits}`);

// Add new fruit at the last: push()
fruits.push("Strawberry");
console.log(`After push(): Fruits are as follows: ${fruits}`);

// Remove fruit in the first position: shift()
fruits.shift();
console.log(`After shift(): Fruits are as follows:  ${fruits}`);

// Remove fruit in the last position: pop()
fruits.pop();
console.log(`After pop(): Fruits are as follows:  ${fruits}`);

let employees = [
    {id: 1, empName: "Akshay", experience: 3.5},
    {id: 2, empName: "Pavan", experience: 2.3},
    {id: 3, empName: "Murthy", experience: 2.1},
]
console.log(employees);

// find() method is used to get the complete result
// findIndex() method is used to get the Index
// some() method is used to check atleast some match is found for the given condition
// every() method is used to check whether all the data is matching for the given condition

let findEmpName = employees.find(employee => employee.empName === "Akshay");
console.log(findEmpName);

let findEmpId = employees.findIndex(employee => employee.empName === "Akshay");
console.log(findEmpId);

let findExpEmp = employees.some(employee => employee.experience > 4);
console.log(findExpEmp);

let findEmpExp = employees.every(employee => employee.experience > 2);
console.log(findEmpExp);

// Slicing
// index:      0   1    2   3   4   5
let numbers = [12, 15, 17, 21, 27, 33];
// negative 
// index:      -6  -5  -4  -3  -2  -1  
console.log(`Numbers are as follows: ${numbers}`);

// slice: To show only desired result
// array.slice(start, end)
// start is included, end is excluded
console.log(`Numbers after slice: ${numbers.slice(1, 3)}`);
console.log(`Numbers after slice: ${numbers.slice(2, 6)}`);
console.log(`Numbers after slice: ${numbers.slice(-5, -1)}`);
console.log(`Numbers after slice: ${numbers.slice(-4, -2)}`);
console.log(`Original array: ${numbers}`);

// Splicing
let someNumbers = [7, 3, 4, 6, 9, 10];
console.log(`Original numbers: ${someNumbers}`);

// splice
// Syntax:
// array.splice(where, how many to remove, element list)
someNumbers.splice(2, 0, 5, 8);
console.log(`After splicing: ${someNumbers}`);
someNumbers.splice(1, 3);
console.log(`After splicing: ${someNumbers}`);
someNumbers.splice(3, 2, 11, 12);
console.log(`After splicing: ${someNumbers}`);
console.log(`Original numbers: ${someNumbers}`);

// concat
let even = [2, 4, 6, 8];
console.log(`Even Array: ${even}`);
let odd = [1, 3, 5, 7, 9];
console.log(`Odd Array: ${odd}`);

console.log(`After combining: ${even.concat(odd)}`);