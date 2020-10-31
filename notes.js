const chalk = require('chalk')
const fs = require('fs')

const getNotes = () => 'Your notes are ready'

const addNote = (title, body) => {
    const notes = loadNotes()
    console.log(notes)
    const duplicateNotes = notes.filter((note) => note.title === title )

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
         })
         
         saveNotes(notes)      
    } else {
       console.log('Note already exists!')
    }
}

const removeNote = (title) => {
    const  notes = loadNotes()
    const notesToKeep = notes.filter( (note) => note.title !== title )   

    if (notes.length === notesToKeep.length) {
        console.log(chalk.red.bold.inverse('No Note Found'))
    } else {
        saveNotes(notesToKeep)
        console.log(chalk.green.bold.inverse('This note removed: '), title)
    }
}

const saveNotes = (notes) => {
   const dataJSON = JSON.stringify(notes)
   fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json') 
        // Convert the read JSON from machine format to readable JSON format
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}