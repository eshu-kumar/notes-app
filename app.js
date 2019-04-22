const chalk=require("chalk")
const yargs=require('yargs')
const notes= require("./notes.js");
const operation=yargs.argv.operation;
const title=yargs.argv.title;
const body=yargs.argv.body;
console.log(operation)
console.log(title)
console.log(body)
if(operation ==='add'){
    notes.addNote(title,body)
}
else if(operation==='remove'){
    notes.removeNote(title)
}
else if(operation==='listNotes'){
    notes.listNotes();
}
else if(operation==='readNote'){
    notes.readNote(title)
}
