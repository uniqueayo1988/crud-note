const fs = require('fs')
// const os = require('os')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes')

const title = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
}

const argv = yargs
  .command('add', 'Add a new note', {
    title,
    body: {
      describe: 'Body of note',
      demand: true,
      alias: 'b'
    }
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title
  })  
  .command('remove', 'Remove a note', {
    title
  })
  .help()
  .argv

var command = process.argv[2]
console.log('Command: ', command)

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body)

  if (note) {
    console.log('Note Created')
    notes.logNote(note)
  } else {
    console.log('Note title taken')
  }
} else if (command === 'list') {
  var allNotes = notes.getAll()
  console.log(`Printing ${allNotes.length} note(s).`)
  allNotes.forEach(note => notes.logNote(note))
} else if (command === 'read') {
  var note = notes.getNote(argv.title)
  if (note) {
    console.log('Note found')
    notes.logNote(note)
  } else {
    console.log('Note not found')
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title)
  var message = noteRemoved ? 'Note was removed' : 'Note not found'
  console.log(message)
} else {
  console.log('Command not recognized')
}

// var user = os.userInfo()

// fs.appendFile('greeting.txt', 'Hello World!')
// fs.appendFile('greetings.txt', 'Hello World!', function (err) {
//   if (err) {
//     console.log('Unable to write file')
//   }
// })
// fs.appendFileSync('greetings.txt', `Hello World again to ${user.username}! You are ${notes.age} years`)
