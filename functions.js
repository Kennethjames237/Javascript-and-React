"use strict";
//you have to know that functions names are just variables in js
// and the point to the containt of the function 
//do a functon name can have a reference like the example below
//we see that square is of type function and then it has an alias 
// that is fun and fun can be call with the same parameter as that of 
//square because the point to the same function.
// ⚠️ FUNCTIONS ARE OBJECT ⚠️

//1- CLASSIC DECLARATION OF FUNCTION
function square(x){
    return x*x;
}

const fun = square;
const y = 7;
const y2 = square(y);
console.log(y2);
console.log(fun(5));

//2- A VARIABLE THAT POINTS TO A FUNCTION (Function expression)
const thrid = function(a) {
    return a * square(a);
}

const y3 = thrid(y);

//3- ARROW FUNCTION
const fourth = (base) => {
    return square(square(base));
}

const y4 = fourth(y);

// function that takes in parameter a reference to another function
function table_of_powers(base, power_fn){
    return power_fn(base);
}

const result = table_of_powers(y,fourth);

//a way of calling the function defining directly the function
const result2 = table_of_powers(6, (x)=>{return Math.sqrt(x)});

// this is also one of the simple way if the body of the function is just
// a return statment and if the argument is just one remove the brakettes
// and also remove the curly bresses and the word return
// ⚠️ this will mainly be use
table_of_powers(6, x => Math.sqrt(x));

const person_1 = {
    first_name : "kenny",
    last_name : "james",
    city : "Turin",
    address : {
        city : 'Turin',
        street: ' Course Duca',
        number: 24,
        post_code: 10129
    },
    print_address : () => {
        console.log(person_1.address.street +', ' + person_1.address.city);
    }
}

person_1.print_address();

//CONSTRUCTOR FUNCTION (it is a functions but it look likes a class)
function Person(name, last, city, street, number, postcode){
    this.first_name= name;
    this.last_name=last;
    this.address = {
        street : street,
        city : city,
        number : number,
        postcode : postcode
    }
}

const person_11 = new Person('kenneth', 'james', 'Turin', 'Via Gavino', 12345, 4200);

console.log(person_11);




console.log(y, y2, y3, y4, result, result2);