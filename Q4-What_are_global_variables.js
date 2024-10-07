//Q4-What are global variables? How are these variables declared, and what are the problems associated with them?
/* 
Global variable: When i=we declare a variable outside of the block of function scope then that variable is treated as global variables
they can be access inside the block scope as well as outside the block scope.
Disadvantages/Problem: It is difficult during debugging
*/
const course='Interview Questions';

function displayCourseName(){
    console.log(`The Course name is ${course}`)
    return;
}

displayCourseName(); //The Course name is Interview Questions
console.log(course) //Interview Questions