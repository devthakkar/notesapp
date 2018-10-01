// var obj = {
//   name: 'Dev'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
//
// var personString = '{"name": "Dev", "age" : 19}';
// var person = JSON.parse(personString);

const fs = require('fs');
var originalNote = {
  title: 'some title',
  body: 'Some body'
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log (typeof note);
console.log(note.title);
