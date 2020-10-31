const chalk = require('chalk')
const fs = require('fs')

const getNotes = () => 'Your notes are ready'

const addNote = (title, body) => {
    const notes = loadNotes()
    console.log(notes)

    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
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
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length === notesToKeep.length) {
        console.log(chalk.red.bold.inverse('No Note Found'))
    } else {
        saveNotes(notesToKeep)
        console.log(chalk.green.bold.inverse('This note removed: '), title)
    }
}

const readNote = (title) => {
    const notes = loadNotes()
    const readNote1 =notes.find((note) => note.title === title)

    if (readNote1 === undefined) {
        console.log(chalk.red.bold.inverse('No Note Found'))
    } else {
        console.log(chalk.green.bold.inverse(readNote1.title) + ' ' + chalk.blue.bold.inverse(readNote1.body))
    }
}
 
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.bgMagenta.bold('All Stored Notes'))
    notes.forEach((note) => {
        console.log(chalk.yellow.bold(note.title) + ' ' + chalk.yellow.bold(note.body))
    })
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
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}