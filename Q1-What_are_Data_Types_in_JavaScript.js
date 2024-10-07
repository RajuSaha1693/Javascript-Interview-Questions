/* 
Their are main two type of Data types in Javascript- Primitive Data Types & Non Primitives Data Types

##Primitive Data Types : This data types are known by many name such as- Built-in Data types or pre-defined data types
Example
String,
Number,
Boolean
Symbol
Null
Undefined
BigInt
*/

const repo_name='Javascript-Interview-Questions' //String
const question_no=1; //Number
const isReadonly=false; //Boolean
let logo=Symbol("JIQ") //Symbol
let isNull=null //Null
let notDefined; //Undefined
const bigNum = BigInt("123422222222222222222222222222222222222"); //BigInt

/* 
Non Primitive Data Types
1.Object
2.Array
3.Function
*/
const fullName={
    first:'John',
    last:"Doe",
} //Object

const name_of_days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']; // Array

const display_name=()=>{
    console.log(`${fullName.first} ${fullName.last}`)
} //Functions

