"use strict";
//this is to get the time now in JS but it is not the time zone 
// (so some times can be wrong)

/*
const now = new Date();
console.log(now );
*/


//using the dayjs which is a library in JS so we import the datejs library
//we import it on the terminal using 'npm init' on type we use module
// Then we install the dayjs with 'npm install dayjs' on the CLI
//You also need to know that when installing the packages it create in 
//a folder on your project call node_modules that contains all the depencencys
//and if you delete this folder you can have it again by typing on the CLI
//'npm install' that will regenerate this folder

/*
import dayjs from 'dayjs';
console.log(dayjs());
*/
//exercise write an object Questions and that has list of answers and idenifies 
//and date of publish of both

import dayjs from 'dayjs';

function Answer(text, userId, date, score=0){
    this.text = text;
    this.userId = userId;
    this.date = dayjs(date);
    this.score = score;
}

function Question(text, userId, date){
    this.text =text;
    this.userId =userId;
    this.date = dayjs(date);
    this.answers =[];

    //this is an arrow function to add an answer in the answer prop(Array)
    this.addAnswer = (ans) => {
        this.answers.push(ans);
    }

    //this arrow function returns an array of answer of a given user (userId)
    this.getAnswer = (userId) => {
        const result = [];
        this.answers.forEach(element => {
            if(element.userId === userId){
                result.push(element);
            }
        });
        return result;
    }

    this.afterDate = (date) => {
        const result = [];
        this.answers.forEach(element => {
            if(element.date.isAfter(date)){
                result.push(element);
            }
        });
        return result;
    }

}

const q1 = new Question("How long is this exercise?", 1, "2026-02-27");
console.log(q1);

const a1 = new Answer("too much by 2", 2, "2026-02-27");
const a2 = new Answer("10 minutes", 3, "2026-02-27");
const a3 = new Answer("15 minutes", 2, "2026-02-27");
const a4 = new Answer("30 minutes", 2, "2026-02-26");


q1.addAnswer(a1);
q1.addAnswer(a2);
q1.addAnswer(a3);

console.log(q1);

console.log("------getAnswer----------");
const user2a = q1.getAnswer(2)

console.log(user2a);

console.log("------afterDate----------");

const yesterday = dayjs("2026-02-26");

const answersAfteryesterday = q1.afterDate(yesterday);

console.log(answersAfteryesterday);




console.log();