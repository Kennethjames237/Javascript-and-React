"use strict";
/* Base */
//in js there are 2 ways of creating a variable
/* let , const*/

const scores = [3, -2, 10, 0, -5, -8, 7, 4, -1, 9, 6];
const newscores = [];

scores.forEach(element => {
    if (element >= 0) {
        newscores.push(element);
    }
});

for (const c of [1, 2]) {
    const smallest = Math.min(...newscores);
    const index = newscores.indexOf(smallest);
    console.log("Smallest", smallest, "at index", index);
    newscores.splice(index, 1);
}

let avg = 0.0;

for(const value of newscores){
    avg +=value;
}

avg /= newscores.length;

avg = Math.round(avg);
const diff = scores.length - newscores.length;

for(let i = 0 ; i < diff; i++){
    newscores.push(avg);
}

console.log(`The difference are ${diff}`);









console.log(newscores);
