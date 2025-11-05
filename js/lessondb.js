const {lessonsdb} = require('./DBFunction')

const lessoncont = [
  {
    id: 1,
    language: "Japanese",
    title: "Lesson 1: Introduction to Japanese",
    content: `Japanese is the official language of Japan, spoken by over 125 million people. It is known for its unique writing system, polite expressions, and rich cultural depth. Unlike English, Japanese uses three scripts: Hiragana, Katakana, and Kanji. Hiragana is used for native Japanese words and grammar, Katakana is for foreign words and names, and Kanji consists of characters borrowed from Chinese that represent meanings or ideas.
Japanese grammar is quite different from English. The typical sentence structure is Subject–Object–Verb (SOV). For example, instead of saying “I eat sushi,” in Japanese it becomes “I sushi eat” – Watashi wa sushi o tabemasu. Particles, such as wa and o, are small words that show the function of other words in a sentence.
Politeness is a key part of Japanese communication. The language changes depending on who you are talking to—friends, teachers, or strangers. Learning basic greetings like Konnichiwa (Hello), Arigatou (Thank you), and Sayounara (Goodbye) is a great way to start.
Studying Japanese can be both challenging and rewarding. With practice and curiosity, learners gain insight into Japan’s culture, traditions, and way of thinking while building valuable language skills.`
  },
  {
    id: 2,
    language: "Japanese",
    title: "2nd lesson",
    content: "This is just a test, and it will be re-written"
  } ,
    {
    id: 3,
    language: "Japanese",
    title: "3rd lesson",
    content: "This is just a test, and it will be re-written"
  } ,
    {
    id: 4,
    language: "Japanese",
    title: "4th lesson",
    content: "This is just a test, and it will be re-written"
  } ,
    {
    id: 5,
    language: "Japanese",
    title: "5th lesson",
    content: "This is just a test, and it will be re-written"
  } ,
    {
    id: 6,
    language: "Japanese",
    title: "6th lesson",
    content: "This is just a test, and it will be re-written"
  } ,
    {
    id: 7,
    language: "Japanese",
    title: "7th lesson",
    content: "This is just a test, and it will be re-written"
  } ,
    {
    id: 8,
    language: "Japanese",
    title: "8th lesson",
    content: "This is just a test, and it will be re-written"
  } ,
    {
    id: 9,
    language: "Japanese",
    title: "9th lesson",
    content: "This is just a test, and it will be re-written"
  } ,
    {
    id: 10,
    language: "Japanese",
    title: "10th lesson",
    content: "This is just a test, and it will be re-written"
  } ,  {
    id: 11,
    language: "Japanese",
    title: "11th lesson",
    content: "This is just a test, and it will be re-written"
  } ,
];

lessoncont.forEach(lesson => lessonsdb(lesson));
 