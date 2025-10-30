const fs = require('fs')

function readDb(dbName = 'db.json') {
    const data = fs.readFileSync(dbName, 'utf-8')
    return JSON.parse(data)
}

function writeDb(obj, dbName = 'db.json') {
    if (!obj) { return console.log('Please provide data to saveq') }
    
    try {
        fs.writeFileSync(dbName, JSON.stringify(obj))
        return console.log('Save succesful')
    }
    catch (err) {
        return console.log('Save failed')
    }
}


function registerUser(userObj, dbName = 'users.json') {
    if (!userObj.username || !userObj.email || !userObj.password) {
        console.log('All user fields are required!');
        return
    }

    let users = [];
    if (fs.existsSync(dbName)) {
        users = readDb(dbName);
    }
    users.push(userObj);
    writeDb(users, dbName);
    console.log(`User ${userObj.username} registered successfully.`);

}


module.exports = {readDb, writeDb, registerUser};
