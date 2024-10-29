//Q11-What is higher order function?
/*
The function which takes an argument is called a higher order function

1. Function as Argument
*/
function superHero(name){
    return `${name} is from`
}

function displaySuperHero(func,name,city){
    console.log(`${func(name)} ${city}`)
    return func(name)
}
displaySuperHero(superHero,'Batman','Gotham')

//2. Function as Return
function multiplier(num){
    return function(x){
        return x*num
    }
}
const result=multiplier(4);
console.log(result(2))
console.log(multiplier(4)(2))