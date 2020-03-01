const http = require("./server.js")
let comments=require("./comments.json");
let commentbase=require("./commentbase.json");
const fs = require("fs");

commentbase=JSON.stringify(commentbase);
commentbase=JSON.parse(commentbase);
//console.log(commentbase);



comments=JSON.stringify(comments);
comments=JSON.parse(comments);
let countId=commentbase.comments.length;
console.log(countId);
commentbase.comments[countId]=comments.comments;
commentbase.comments[countId].id=countId;
//comments.comments[id]=countId;
//console.log(commentbase);
/* comments.comments[0].id=String(parseInt(commentbase.comments[0].id)+1);
comments=JSON.stringify(comments);
console.log(comments); */

let writeableStream = fs.createWriteStream("commentbase.json");
writeableStream.write(JSON.stringify(commentbase));
console.log(commentbase);
/* writeableStream.write("Продолжение записи \n");
writeableStream.end("Завершение записи");
let readableStream = fs.createReadStream("hello.txt", "utf8");
 
readableStream.on("data", function(chunk){ 
    console.log(chunk);
});  */
/* let countComment=0;
let addComment=function(comment){
    commentbase.comments[++countComment]=JSON.stringify(test);
}

let test = {
    id:1,
    author:"Hendel",
    text:"Hedel like Mozart"
}

addComment(test); */