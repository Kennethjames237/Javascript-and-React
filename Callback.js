"use strict";
//A CALLBACK function is a function in a function
//that is a function that returns another function that will compute 
// the rest of the activity
/*
Example of a callback function
scores is an array
const newscores = scores.filter( element => {return (element >= 0)})

scores.foreach(x => x < 0) --> this returns all negative numbers


this is functional programming 
MOST USE FUNCTIONS

1 - .filter(CALLBACK)
    flters elements in the array with respect to the logic in the CALLBACK function
    This returns a new array
    e.g scores.filter(x => x<3) -> it will return a new array having elements less than 3 in the scores array

2 - .foreach(CALLBACK)

3 - .every(CALLBACK) 
    check if all elements in the array passed the callback function test return a Boolean
    e.g scores.every( x => x < 0) -> true if all the elements in the score are negative

4 - .some(CALLBACK)
    Test if AT LEAST ONE element in the array passes the logic in the callback function.
    -> it returns a Boolean value
    
5 - .map(CALLBACK)
    map performs on each element in the array the logic implemented by the callback function
    -> this return a new array
    e.g scores.map( x => x*x ); -> return the square of all element in the scores array

6 - .reduce(CALLBACK)



*/
function  distance_sign(metric = true){
    let conversion = 1.0;
    let unit = "km";
    if(metric == false){
        conversion = 0.621371;
        unit = "miles"
    }

    function sign_text(meters){
        const value = (meters / 1000.0 * conversion).toFixed(3);

        const msg = `${value} ${unit}`;

        return msg;

       
    }
    return sign_text;
}

const sign_eu = distance_sign();
const sign_uk = distance_sign(false);



console.log(sign_eu(1500));
console.log(sign_uk(1500));

