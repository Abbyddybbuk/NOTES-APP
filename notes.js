const fs = require('fs')

const getNotes = () => 'Your notes are ready'

const addNote = (title, body) => {
    const notes = loadNotes()
    console.log(notes)
    const duplicateNotes = notes.filter((note) => {
         return note.title === title
    })

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
    addNote: addNote
}