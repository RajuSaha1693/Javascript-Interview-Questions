//Q7-What_is_called_Variable_typing_in_JavaScript.js ? Does Javascript does automatic conversion
/* 
When a variable is declared as number and that same variable is used to assigned it to some other types then it is called a variable
typing.
Javascript perform automatic conversion.
*/
let age=31;
console.log(`Age : ${age}, Type: ${typeof age}`) //Age : 31, Type: number
age="Thirty One";
console.log(`Age : ${age}, Type: ${typeof age}`) //Age : Thirty One, Type: string