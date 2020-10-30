const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
const { argv } = require('yargs')
// console.log(chalk.yellow.bold.inverse(getNotes()))
// console.log(chalk.red(validator.isEmail('abhijeet.abap%cbc.com')))
// console.log(chalk.blue.bold(validator.isURL('www.sap.com')))

// Customize your app version
yargs.version('1.1.0')

// Create Command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
           describe: 'Note Title',
           demandOption: true,
           type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    } 
})

// Create Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: () => notes.removeNote(argv.title)
})

// Create List command
yargs.command({
    command: 'list',
    describe: 'Listing all the notes',
    handler: () => console.log('Listing all the notes!')
})

// Create Read command
yargs.command({
    command: 'read',
    describe: 'Read all the notes',
    handler: () => console.log('Reading all the notes!')
})

// console.log(yargs.argv)
yargs.parse()