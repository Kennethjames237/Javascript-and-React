"use strict";
/*
    ASYNCHONICITY
    -------------
Callbacks are the most fundamental way for writing asynchronous JS code
we made use of a function call setTimout that takes in parameter a 
Callback function and a number that set the time it will take to perform the callback
but will it is processing the program continous execcution and at the end if the timeout is
not done it will wait and exit

so we have
1 - setTimeout ( ()=>(), int)
2 - setInterval( ()=>(), int) -> but set a time every int time


So in ascyncronos in JS all the code runs first that is all the normal functions and all the like
then will running till the end there is a queue of asyncronous function waiting to be executed one ofter the other
and the scheduling here is FIFO (first come first serve based) and when all does asynch functions are called all the
whole program can return.

*/
console.log("Start");
let count = 0;

setInterval( () => {
    console.log(`Finised ${count}`); 
    count++
    } , 1000);

console.log("End");



