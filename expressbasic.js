const express=require('express');
const student=express();
student.get('/',(req,res)=>{
    res.send("i am sanguuuuuuuu");
});
student.listen(3000,()=>{
    console.log("hello friends");
});
student.get('/details',(req,res)=>{
    const stdetails=[{"id":1,"name":"sangu"}]
});