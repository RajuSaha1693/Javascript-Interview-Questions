//Q3-What_are_undeclared_and_undefined_variables.js
/* 
Undeclared Variables: when we try to access a variable which is neither defined nor initialize , if we try to 
access that it will throw a Run Time Error and will show as undefined

Undefined Variables: When a variable is defined but it is not initialized with any of the data , and we try to 
access the data it will give as undefined
*/

let my_address;
console.log(my_address) //undefined
//Trying to access the variable which is neither defined nor initialized
console.log(my_name) //ReferenceError: my_name is not defined
