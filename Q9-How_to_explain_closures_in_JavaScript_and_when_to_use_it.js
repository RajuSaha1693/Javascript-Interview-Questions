//Q9-How_to_explain_closures_in_JavaScript_and_when_to_use_it.js
/*
Explanation : A closures in Javascript is a feature in which a inner function has an access to the outer(enclosing)
function variables, So we can say that the inner function can access the variables from its parent scope as well as global scope.
i.e the inner function remember the environment from where it is called event after the outer function return
*/

function superHero(){
    let heroName="Batman"
    function displaySuperHero(){
        return `${heroName} is from Gotham City`
    }
    return displaySuperHero
}

const hero=superHero();
console.log(hero()); //Batman is from Gotham City

//Closure Uses:
/*
1.Data Encapsulation: It is for Data Encapsulation (Private Data): So we can limit the scope of the the variables
 in the outer function
*/

function createCounter(){
    let count=0;
    return{
        increment:function(){
            count=count+1;
            return count
        },
        decrement:function(){
            count=count-1;
            return count;
        },
        getState:function(){
            return count
        }
    }
}

const counter=createCounter();
console.log(counter.increment()) //1
console.log(counter.increment()) //2
console.log(counter.decrement()) //1
console.log(counter.getState())  //1

/*
2. Maintaining State
3. Partial application & currying
*/
//Function currying

function multiple(firstNumber){
    return function(secondNumber){
        return firstNumber * secondNumber
    }
}
const result=multiple(2);
console.log(result(2)) //4

//closure is powerful as it allow to access the variables of LEXICAL SCOPE and can be called from the OUTER SCOPE