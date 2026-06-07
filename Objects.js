"use strict";
/*Objects and functions*/
 
const person_1 = {
    first_name : "kenny",
    last_name : "james",
    city : "Turin",
    'work city' : 'Turin',
    address : {
        city : 'Turin',
        street: ' Course Duca',
        number: 24,
        post_code: 10129
    }
}

const person_2 = {
    first_name : "nna",
    last_name : "minkousse"
}

const names = person_1.last_name + " " + person_1.first_name;
const city2 = person_2.city ?? "Rome";
// ?? checks if  the 1st arhument is null or undefine -- not for 0 or '')

const wc = person_1["work city"];


const phonebook = {};

phonebook['kenneth'] = 9876;
phonebook['james'] = 567;

console.log(phonebook);

const my_city = person_1.address.street;
console.log(my_city);


//?. is used to access a propaty of an object if it is undifine if it is undefine it will return an undefine value
const my_city2 = person_2?.address?.city;
console.log(my_city2);

console.log(city2);
console.log(names);

//to get the alias of an object that is another reference use =
const person_1_alias = person_1;


//to copy an object we do the ...  But this is shallow copy Not a deep copy
//const person_1_copy = {...person_1}; 

//copy with default property if it exist it will override if not it will create and give the value
//const person_1_copy = {...person_1, city:'paris'};

//create a property and copy an object (that is add a propety and join an object) if the propertu already exist do not override ignore
const person_1_copy = {city:'paris', ...person_1};

//console.log(Object.keys(person_1));
//console.log(person_2);
console.log(person_1_copy);


//////////////////////////
