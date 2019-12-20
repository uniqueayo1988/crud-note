console.log('Starting App.js')

const fs = require('fs')
// const os = require('os')
const _ = require('lodash')
const argv = require('yargs').argv

const notes = require('./notes')

// console.log(process.argv, 'process')
// console.log(argv, 'yargs')

var command = process.argv[2]
console.log('Command: ', command)

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body)

  if (note) {
    console.log('Note Created')
    console.log('--')
    console.log(`Title:  ${note.title}`)
    console.log(`Body:  ${note.body}`)
  } else {
    console.log('Note title taken')
  }
} else if (command === 'list') {
  notes.getAll()
} else if (command === 'read') {
  notes.getNote(argv.title)
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
