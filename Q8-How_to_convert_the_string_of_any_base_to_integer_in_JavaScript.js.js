//Q8-How_to_convert_the_string_of_any_base_to_integer_in_JavaScript.js
/* 
String can be converted to integer using the predefined/built-in method of Javascript
parseInt() this method convert the string into integer
if the string doesn't contain any number then it returns as not a number (NaN)
*/

const amount="10000/-";
console.log(typeof amount); //string
console.log(parseInt(amount)); //10000
console.log(typeof parseInt(amount)) //number

const fullName="Bruce Wayne";
console.log(parseInt(fullName)); // NaN

