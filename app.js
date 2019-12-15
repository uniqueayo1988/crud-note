console.log('Starting App.js')


const fs = require('fs')
const os = require('os')
const _ = require('lodash')
const notes = require('./notes')

// var user = os.userInfo()

let res = notes.add(8, 2)

// console.log(res)

console.log(_.isString(true))
console.log(_.isString('Ayo'))

var filteredArr = _.uniq(['ade', 2, 'ade', 'segun', 2, 5, 6])
console.log(filteredArr)

// fs.appendFile('greeting.txt', 'Hello World!')
// fs.appendFile('greetings.txt', 'Hello World!', function (err) {
//   if (err) {
//     console.log('Unable to write file')
//   }
// })
// fs.appendFileSync('greetings.txt', `Hello World again to ${user.username}! You are ${notes.age} years`)
