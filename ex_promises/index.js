import sqlite from 'sqlite3'

const db = new sqlite.Database('data.sqlite', (err)=> {
    if(err){
        console.log("Error in opening the database :-(");
    }else{
        console.log("Connection established.. :-)");
    }
})

function getUserNames(){
    /* returns a Promise that resolves to an array of string */
    return new Promise((resolves, reject) => {
        const sql = 'SELECT name FROM user';
        db.all(sql, (err, rows) => {
            if(err){
                reject(err);
            }else{
                const result = rows.map( r => r.name);
                resolves(result);
            }
        })
    });
}

function getEmailByUser(userName){
    
    return new Promise((resolves, reject) => {
        const sql = "SELECT email FROM user WHERE name = ?";
        db.get(sql,[userName],(err, row) => {
            if(err){
                reject(err);
            }else if(row){
                //because just signe row 
                resolves(row);
            }else{
                //so no row at all
                reject("Unknown user name");
            }
        })
    });
}

// getUserNames().then(users => console.log(users))
//                 .catch(err => console.log(err));
// getEmailByUser("kenny").then(email => console.log(email))
//                     .catch(err => console.log(err));

//retrive and print all the user names and emails
getUserNames().then(names => {
    // names.forEach(name => {
    //     getEmailByUser(name).then( email => {
    //         console.log(email)}
    //     );
    // });


    Promise.all( names.map( name => getEmailByUser(name)) ).then ( emails => {
        console.log(emails);
    })
})

const p1 = new Promise((resolves) => {
    setTimeout(() =>{
        resolves("Hello from p1")
    }, 1000)
});

const p2 = new Promise((resolves) => {
    setTimeout(() =>{
        resolves("Hello from p2")
    }, 3000)
});

Promise.all([p1, p2])
.then(data => console.log(data[0], data[1]))
.catch((err) => console.log(err));





    
