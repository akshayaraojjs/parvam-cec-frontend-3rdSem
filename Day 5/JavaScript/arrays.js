var even = [2, 4, 6, 8, 10]; // array object

console.log(even);
console.log(typeof (even));

// unshift() method is used to add the item to the first position
even.unshift(20);
console.log(`After unshift(20): ${even}`);
// push() method is used to add the item to the last position
even.push(24);
console.log(`After push(24): ${even}`);
// shift() method is used to remove the first item
even.shift();
console.log(`After shift(): ${even}`);
// pop() method is used to remove the last item
even.pop();
console.log(`After pop(): ${even}`);
// find() method is used to check for the item

var students = [
    { id: 1, studentName: "Akshay", branch: "CSE", age: 22 },
    { id: 2, studentName: "Ajay", branch: "ISE", age: 20 },
    { id: 3, studentName: "Vijay", branch: "CSE", age: 23 },
    { id: 4, studentName: "Jay", branch: "AIML", age: 21 },
    { id: 5, studentName: "Akshay", branch: "CSE", age: 24 },
]
// Example 1: Find the Student Name
function findAkshay(student) {
    // Checking for student name - Akshay
    return student.studentName === "Akshay";
}
// Return the found object
var akshay = students.find(findAkshay);
console.log(akshay);
// Return the found index
var akshayIndex = students.findIndex(findAkshay);
console.log(akshayIndex);

// Example 2: Find the Branch
function findBranch(branchName) {
    // Checking for student of branch - AIML
    return branchName.branch === "AIML";
}

// // Return the found object
var branch = students.find(findBranch);
console.log(branch);
// // Return the found index
var branchIndex = students.findIndex(findBranch);
console.log(branchIndex);

// Use find() method to get complete result
// Use findIndex() method to get the index 

function checkAge(studentAge){
    // Checking for age of the student more than 22
    return studentAge.age > 22;
}

// some() method is used to check atleast if we found some match out of all items
var showSomeAge = students.some(checkAge);
console.log(showSomeAge);

// every() method is used to check whether all the items are coming under the checking condition
var showAllAge = students.every(checkAge);
console.log(showAllAge);