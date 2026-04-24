const fs = require("fs");

//Synchronous way
//fs.writeFileSync("./test.txt", "Hey There");

//Asynchronous way
//fs.writeFile("./test.txt", "Hello World!!!", (err) => {});

//const data = fs.readFileSync("test.txt", "utf-8");
//console.log(data);

// const data = fs.readFile("test.txt", "utf-8", (err, result) =>{
//     if(err){
//         console.log("Error", err);
//     }else{
//         console.log(result);
//     }
// })

//fs.appendFileSync("test.txt", "\n" + `${Date.now()}`);

//fs.cpSync("test.txt", "test2.txt");
//fs.unlinkSync("test2.txt");

//console.log(fs.statSync("test.txt"));

//fs.mkdirSync("myFolder");
fs.mkdirSync("myFolder2/a/b", {recursive: true});
