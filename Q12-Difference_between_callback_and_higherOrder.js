//Q12-What is difference between Higher Order function and callback function
/* 
A callback is a function which is passed as argument
While Higher Order Function is a function which accept the argument
*/

function higherOrderFunction(fun){
    return fun()
}
function consoleDiagram(){
    console.log(
        "higher order function ---> function hof(cb) <--- callback function"
    )
}
higherOrderFunction(consoleDiagram)