const { readDb } = require('./DBFunction');

const flashcards = readDb(); // default reads 'db.json'
console.log(flashcards);
