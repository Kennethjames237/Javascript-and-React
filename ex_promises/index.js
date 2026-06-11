import sqlite from 'sqlite3'

/*
    In a async function you can use an await  and you can not use an await in a function that is not async

*/

const db = new sqlite.Database('data.sqlite', (err) => {
    if (err) {
        console.log("Error in opening the database :-(");
    } else {
        console.log("Connection established.. :-)");
    }
})

function getUserNames() {
    /* returns a Promise that resolves to an array of string */
    return new Promise((resolves, reject) => {
        const sql = 'SELECT name FROM user';
        db.all(sql, (err, rows) => {
            if (err) {
                reject(err);
            } else {
                const result = rows.map(r => r.name);
                resolves(result);
            }
        })
    });
}

function getEmailByUser(userName) {

    return new Promise((resolves, reject) => {
        const sql = "SELECT email FROM user WHERE name = ?";
        db.get(sql, [userName], (err, row) => {
            if (err) {
                reject(err);
            } else if (row) {
                //because just signe row 
                resolves(row);
            } else {
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
// getUserNames().then(names => {
//     // names.forEach(name => {
//     //     getEmailByUser(name).then( email => {
//     //         console.log(email)}
//     //     );
//     // });

//     Promise.all(names.map(name => getEmailByUser(name))).then(emails => {
//         console.log(emails);
//     })
// })

async function getAllEmails2() {
    const names = await getUserNames();
    const emails = [];
    for(const name of names){
        let result = await getEmailByUser(name);
        emails.push(result);
    }
    return emails;
    
    
}

 const result = await getAllEmails2();
 console.log(result);











