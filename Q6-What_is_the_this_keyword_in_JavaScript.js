//Q6-What_is_the_this_keyword_in_JavaScript.js
/* 
function in Javascript are essentials object, Like wise object, function can be assigned to variables and can be called,
pass to other function and can be invoked from other function.

As much like object they have their own properties "this" which store the current context of Javascript program
SO based on the function definition the "this" keyword properties , context is also changed how the function is called.
*/

 const address={
    street:'4/12 Colony Road',
    city:'Berlin',
    display_address:function(){
        return `${this.street} City - ${this.city}`
    }
}
console.log(address.display_address()) //4/12 Colony Road City - Berlin