
console.log("Starting app");
const fileSystem = require('fs');
const os = require('os');
const _ = require('lodash');

const yargs = require('yargs');
const notes = require('./notes.js');
const argv = yargs.argv;

var x = argv._[0];
console.log('command - ', x);
//console.log(process.argv);
console.log('yargs',argv);


     if (x === 'add')
 {  notes.addNote(argv.text, argv.paragraph);
 }   else if (x === 'read' )
 {  notes.readNote(argv.text);  
 }   else if(x === 'delete')
 {  notes.deleteNote(argv.text);  
 }   else
 {  console.log('Whoops! command not found');
 }
    // include reply function to the note as well(comments!)

