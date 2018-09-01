console.log('starting notes.js');
const fs = require('fs');

var addNote = function(text, paragraph){
    var notes_array = [];
    var note = {
        text : text,
        paragraph : paragraph
       
    };
   
    try {
        var m = fs.readFileSync('data.json');
        notes_array = JSON.parse(m);
       
    } catch (e) {
        
    }

    var duplicateNotes = notes_array.filter(function(note) {
        return note.text === text;
    })
 
    if (duplicateNotes.length === 0)
    {
        notes_array.push(note);
        fs.writeFileSync('data.json', JSON.stringify(notes_array));

    } 
  
};

var readNote = function(text){
    try {
        var m = fs.readFileSync('data.json');
        notes_array = JSON.parse(m);
       
    } catch (e) {
        
    }

    var filteredNotes =  notes_array.filter(function(note) {
        return note.text === text;
    })
    
      console.log( filteredNotes[0]);
};
     
var deleteNote = function(text){
    try {
        var m = fs.readFileSync('data.json');
        notes_array = JSON.parse(m);
       
    } catch (e) {
        
    }

    var filteredNotes =  notes_array.filter(function(note) {
        return note.text !== text;
    })
    
    fs.writeFileSync('data.json', JSON.stringify(filteredNotes));
    return notes_array.length !== filteredNotes.length;
};

module.exports = {
    addNote : addNote,   // adding and saving the article for current release
    readNote : readNote,       // reading one specific article
    deleteNote : deleteNote      // deletion
};