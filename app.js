const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')
console.log(chalk.yellow.bold.inverse(getNotes()))
console.log(chalk.red(validator.isEmail('abhijeet.abap%cbc.com')))
console.log(chalk.blue.bold(validator.isURL('www.sap.com')))

// Customize your app version
yargs.version('1.1.0')

// Create Command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: () => console.log('Adding a new note!')
})

// Create Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => console.log('Removing a note!')
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

console.log(yargs.argv)