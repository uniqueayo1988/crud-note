console.log('Starting App.js')

const fs = require('fs')
// const os = require('os')
const _ = require('lodash')
const argv = require('yargs').argv

const notes = require('./notes')

console.log(process.argv, 'process')
console.log(argv, 'yargs')

var command = process.argv[2]
console.log('Command: ', command)

if (command === 'add') {
  console.log('Adding New Note')
} else if (command === 'list') {
  console.log('List all notes')
} else if (command === 'read') {
  console.log('Reading notes')
} else if (command === 'remove') {
  console.log('Removing note')  
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
