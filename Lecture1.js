"use strict";
/* Base */
//in js there are 2 ways of creating a variable
/* let , const*/

const scores = [3, -2, 10, 0, -5, -8, 7, 4, -1, 9, 6];
/* 
//This below can be done just buy using a callback function and a filter 
//A CALLBACK function is a function in a function
//that is a function that returns another function
const newscores = [];

scores.forEach(element => {
    if (element >= 0) {
        newscores.push(element);
    }
});
*/
// can also be done like this for comprendion 
// const newscores = scores.filter( element => {return (element >= 0)})
const newscores = scores.filter( element => element >= 0 )
console.log(newscores);

for (const c of [1, 2]) {
    const smallest = Math.min(...newscores);
    const index = newscores.indexOf(smallest);
    console.log("Smallest", smallest, "at index", index);
    newscores.splice(index, 1);
}

//let avg = 0.0;

//for(const value of newscores){
 //   avg +=value;
//}

let avg = newscores.reduce((sum, element) => (sum+element), 0);

avg /= newscores.length;

avg = Math.round(avg);
const diff = scores.length - newscores.length;

for(let i = 0 ; i < diff; i++){
    newscores.push(avg);
}

console.log(`The difference are ${diff}`);









console.log(newscores);
