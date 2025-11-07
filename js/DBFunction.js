const { error } = require('console');
const fs = require('fs');
const { json } = require('stream/consumers');


// No json file parso un atgriez datus ka data  
function readDb(dbName = 'flasjcardDb.json') {
    const data = fs.readFileSync(dbName, 'utf-8')
    return JSON.parse(data)
} 

function writeDb(obj, dbName = 'flashcardDb.json') {
    if (!obj) { return console.log('Please provide data to saveq') }
    
    try {
        fs.writeFileSync(dbName, JSON.stringify(obj, null, 2));
        return console.log('Save succesful')
    }
    catch (err) {
        return console.log('Save failed')
    }
}

function registerUser(userObj, dbName = 'users.json') {
    if (!userObj.username || !userObj.email || !userObj.password) {
        console.log('All user fields are required!');
        return;
    }

    let users = [];
    if (fs.existsSync(dbName)) {
        users = readDb(dbName);
    }
    users.push(userObj);
    writeDb(users, dbName);
    console.log(`User ${userObj.username} registered successfully.`);

}

function lessonsdb(lessoncont, dbName = 'lessondb.json') {
    if (!lessoncont.id || !lessoncont.language|| !lessoncont.title  || !lessoncont.content) {
        console.log('All lesson fields must be filled!!')
        return;
    }
    let lessons = [];

    if (fs.existsSync(dbName)) {
        try {
            const data = fs.readFileSync(dbName, 'utf-8');
            lessons = JSON.parse(data);
        }
        catch (err) {
            console.log('Error reading the lesson.json file: ', err);
            return;
        }
    }
    
    const duplicate = lessons.find(
        (lesson) =>
            lesson.language === lessoncont.language && lesson.title === lessoncont.title
    );

    if (duplicate) {
        console.log(`Lesson "${lessoncont.title}" for ${lessoncont.language} already exists. Skipping save.`);
        return;
    }

    lessons.push(lessoncont);
    
    try {
        fs.writeFileSync(dbName, JSON.stringify(lessons, null, 2))
        console.log('Lesson saved succesfully');
    }
    catch (err) {
        console.error('Error while saving lessons: ', err);
    }
    

}


module.exports = {readDb, writeDb, registerUser, lessonsdb};
