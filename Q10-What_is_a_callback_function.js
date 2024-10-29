//Q10-What_is_a_callback_function?
/* 
A callback function is a function which is passed to another function as a argument and is executed inside the parent.
i.e We can say that when a function is passed to another function and that function is executed or take action inside that

*/
//Synchronous Callback
function add(val1,val2){
    return val1+val2
}
function subtract(val1,val2){
    return val1-val2
}
function calculator(val1,val2,action){
    return action(val1,val2)
}
console.log(calculator(1,2,add));
console.log(calculator(40,12,subtract))

//Asynchronous Callback
function display(fullName){
    console.log(fullName)
    return fullName;
}

setTimeout(()=>{
    display('John Wick')
},1000);