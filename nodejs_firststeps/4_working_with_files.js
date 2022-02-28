//files module
const fs = require("fs")

//CREATE THE FILE
//s.open() method takes a "flag" as the second argument, if the flag 
//is "w" for "writing", the specified file is opened for writing. 
//If the file does not exist, an empty file is created:

// fs.open("testing.txt", "w", err => {
//     if(err) throw err;
//     //if error this will happen (else)
//     console.log("File created succesfully")
// })


//WRITE THE CONTENT IN A FILE
//this will write/replace al the text in the file
// fs.writeFile("testing.txt", "Hello world", err => {
//     if(err) throw err;
//     console.log("Wrote in file succesfully")
// });


//UPDATE THE FILE
// fs.appendFile("testing.txt", "\nThis will be the next that will show in the file", err => {
//         if(err) throw err;
//         console.log("Updated in file succesfully")
//     });

//RENAME THE FILE
// fs.rename("testing.txt", "testing_rename.txt", err => {
//         if(err) throw err;
//         console.log("Changed name succesfully!")
//     })


//DELETE THE FILE

fs.unlink("testing_rename.txt", err => {
    if(err) throw err;
    console.log("Deleted succesfully!")
})