import sqlite from 'sqlite3'
/*
Instanciationg a db is with new and then pass 2 argument  one for the 
file where the db will be created and a function (CALLBACK function).
This is also an asyncronous function.

Now lets talk about how to query data in the db using sqlite
1 - db.all('query', CALLBACK) -> this is use to get ALL ROWS OF THE DB
2 - db.get('query',[value], CALLBACK) -> this is use to get only the FIRST(ONE row) ROW of the result of the DB query.
    take note that value is a place holder that is 
    e.g const sql = 'SELECT * FROM course WHERE code=?';
       db.get(sql, [code], (err, row) => {......})

3 - db.each('query', CALLBACK)
4 - db.run('query', CALLBACK)

PROMISES are use to get the result of an asyncronous function
Promises can be created or consumed
– many Web APIs expose Promises to be consumed!
• When consumed:
– a Promise starts in a PENDING state
• the caller function continues the execution, while it waits for the Promise to do its own
processing, and give the caller function some “responses”
– then, the caller function waits for it to either return the promise in a FULFILLED state
or in a REJECTED state

so a promise is instantieted with new and takes in parameter a CALLBACK function that takes
 2 arg resolve and reject and in the body it retens something if it is resovle and another
  if it is rejected

  The Promis object is fulfiled the .then(()=>{}) CALLBACK Takes the result of the promise
  if the is an error the .catch(()=>{}) CALLBACK takes the error.

*/

//to instanciate the database before using 
const db = new sqlite.Database('data.sqlite', (err) => {
    if(!err){
        console.log("DB opened sucessfully :)");
    } else{
        console.log(err);
    }
})


db.all("SELECT * FROM user", (err, rows) => {
    if(err){
        console.log(err);
    } else{
        console.log(rows);
    }
})

db.get("SELECT email FROM user", (err, row) => {
    if(err){
        console.log(err);
    } else{
        console.log(row);
    }
})

db.each("SELECT id FROM user", (err, row) => {
    if(err){
        console.log(err);
    } else{
        console.log(row);
    }
})

//we use promise and we catch the result with then an seen below
//so if we want to take a result in an asynchronous function we make use of PROMISES
//and in the promise we execute the asynchrous function and then take the reult 
//out using 
//         promise_name.then(result => console.log(result)
//                             .catch(err => console.log(err)));

const names = new Promise( (resolve, reject) => {
    db.all("SELECT * FROM user", (err,rows) => {
        if(err){
            reject(err);
        } else{
            resolve(rows.map( r => r.name));
        }
    })
})

names.then((result) => console.log(result))
    .catch(err => console.log(err));

// const id = new Promise( (resolve, reject) =>{
//     db.all("SELECT id FROM user", (err, rows) =>{
//         if(err){
//             reject(err);
//         } else{
//            resolve(rows);
//         }
//     })
// })

// id.then((result)=> console.log(result))
//     .catch( err => console.log(err) );


