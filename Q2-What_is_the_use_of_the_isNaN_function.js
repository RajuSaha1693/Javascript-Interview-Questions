//Q2-What_is_the_use_of_the_ isNaN_function.js
/* The isNan function of javascript check weather a given data/variables is a number or not
when the data passed id not a number then it return as TRUE else it will return FALSE
*/
const number_data=123;
const string_data='Javascript Interview Question';
console.log(isNaN(string_data)) //True
console.log(isNaN(number_data)) //False
console.log(typeof NaN) //type type is consider as a Number
