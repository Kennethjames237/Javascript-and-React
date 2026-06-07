"use strict";
/*Arrays*/

const names = "Luigi De Russis, Francesca Russo, Fulvio Corno, Luca Scribetta, Alberto Mongo Roffarello";
const list_names= names.split(',');

/*
for(let i = 0 ; i < list_names.length; i++){
    list_names[i]=list_names[i].trim();
}
*/

/*
const list_2 = [];

for(const name of list_names){
    list_2.push(name.trim());
}
  */



 const list_2 = list_names.map( element => element.trim());

 /*
const list_3 = [];
for(const name of list_2){
    list_3.push(name.split(" "));
}
    */

const list_3 = list_2.map(element => element.split(" "));

const acron = [];


for(let i = 0; i < list_3.length; i++){
    let symbol = "";
    for(let j = 0; j < list_3[i].length; j++){
        symbol += (list_3[i].at(j).at(0));
    }
    acron.push(symbol);
}


console.log(list_3.length);
console.log(list_3);
//console.log(list_3[0].at(1).at(0));

console.log(acron);