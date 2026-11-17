// Function/method is a block  of code used to perform a task in a program

//Built-In Functions  - Already exists 


let y = Math.max(40,23,54,76,14,71);
console.log(y);

let x = Math.min(40,23,54,76,14,71);
console.log(x);

//2. user-defined functions -created and defined by the programmer
function employee(){
    console.log("Steve Jobs");
}

employee()

//Parameter/Variable and arguments
function Student(firstname, course, age){

    console.log(firstname, course, age);
}

Student("John","Web Development", 30);
Student("Jane", "Cybersecurity", 21);
