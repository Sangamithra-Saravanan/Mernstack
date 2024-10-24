 const fsys=require('fs');
 const details=fsys.readFile('data.txt',(err,data)=>{
    if(err){
        console.error("please enter proper name");
    }
    else{
        console.log(data.toString())
    }
})