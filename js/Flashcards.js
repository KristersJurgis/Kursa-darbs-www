const { readDb } = require('./DBFunction')

const quiz = readDb('../KURSA DARBS/db.json')

quiz.forEach((item, index) => {
  console.log(`\nFlashcard #${index + 1}`);
  console.log(`Q: ${item.question}`);
  console.log(`A: ${item.answer}`);
});