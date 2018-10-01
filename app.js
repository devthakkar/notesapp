
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js')

const titleOptions = ({
  describe: 'title of note',
  demand: true,
  alias: 't'
});

const argv = yargs
.command('add', 'Add a new note', {
  title: titleOptions,
  body: {
    describe: 'body of note',
    demand: true,
    alias: 'b'
  }
})
.command('list', 'list all notes')
.command('read', 'Read a note', {
  title: titleOptions
})
.command('remove', 'remove a note', {
  title: titleOptions
})
.help()
.argv;
var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    notes.logNote(note);
  } else {
    console.log ('this note is already added');
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`printing ${allNotes.length} notes.`);
  allNotes.forEach((note) => {
    notes.logNote(note);
  });
} else if (command === 'read') {
  var noteRead = notes.getNote(argv.title);
  if (noteRead) {
    notes.logNote(noteRead);
  } else {
    console.log('there is no note with that title');
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'note was not removed';
  console.log(message);
} else {
  console.log(
    'command not recognized'
  )
}
