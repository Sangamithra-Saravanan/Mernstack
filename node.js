//step 1: importing server libura like http
const http1=require('http');

//step 2: creating a server
const webserver=http1.createServer((req,res)=>{
    res.end("hello sangu")
});

//step 3: assign the port number for the server
//step 4: listening the server
webserver.listen(3500,()=>{
    console.log("the current server running in http://localhost:3500");
});