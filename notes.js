const fs = require('fs');
const chalk=require('chalk')
const addNote=(title,body)=>{
const notes=loadNotes();
const duplicateNote=notes.find((note)=>{
    return note.title===title;
})
if(!duplicateNote){
    notes.push({
        title:title,
        body:body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse("data has been successfully added"))
}else{
    console.log(chalk.red.inverse("this title is not unique duplicacy is not allowed"))
    console.log(duplicateNotes)
}

}
const removeNote=(title)=>{
    const notes=loadNotes();
    const remainingNotes=notes.filter((note)=>{
    return note.title!==title
    })
    if(notes.length===remainingNotes.length){
     console.log(chalk.bgRed("no records found check the key again to delete"))
    }else{
        saveNotes(remainingNotes);
        console.log(chalk.bgGreen("given entry have benn removed successfully"));
    }
}
const listNotes=()=>{
const notes=loadNotes();
console.log(chalk.green("your notes title")) 
notes.forEach(element => {
    console.log(chalk.yellow(element.title)) 
});
}
const readNote= (title)=>{
const notes=loadNotes();
const yourNote=notes.find(note=>{
    return note.title===title;
})
if(yourNote){
    console.log(chalk.green.inverse(yourNote.title))
    console.log(chalk.yellow(yourNote.body))
}else{
    console.log(chalk.red("title does not match to existing records"))
}
}
const loadNotes=()=>{
    try
    {
   const dataBuffer=fs.readFileSync('notes.json');
   const jsondata=dataBuffer.toString();
   return JSON.parse(jsondata);
    }
    catch(e)
    {
     return [];
    }
}
const saveNotes = (notes)=>{
try
{
const jsonString =JSON.stringify(notes);
fs.writeFileSync("notes.json" , jsonString);
}catch(e){
    console.log(e)
}
}
module.exports={
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}