console.log('Starting Notes.js')

module.exports.addNote = () => {
  console.log('Add Note')
  return 'New Note'
}

var addNote = (title, body) => {
  console.log('Adding Note', title, body)
}

var getAll = () => {
  console.log('Getting all notes')
}

var getNote = (title) => {
  console.log('Getting note', title)
}

var removeNote = (title) => {
  console.log('Remove note', title)
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
