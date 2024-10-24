const express=require('express')//importing 3rd party module
const student=express();//calling express basoic function
student.get('/student',(req,res)=>{//read curd restfull concept we are calling
    res.send("heyyy RA");//response to the client
});
student.put('/student',(req,res)=>{//read curd restfull concept we are calling
    res.send("heyyy vv RA");//response to the client
});
student.post('/student',(req,res)=>{//read curd restfull concept we are calling
    res.send("heyyy aaaa RA");//response to the client
});
student.delete('/student',(req,res)=>{//read curd restfull concept we are calling
    res.send("heyyy rrrrr RA");//response to the client
});

//running server
student.listen(3000,()=>{
    console.log("currently server runing");
});

student.get('/details',(req,res)=>{
    const stdetails=[{"id":1,"name":"rk"},
        {"id":2,"name":"ra"}
    ];
    res.json(stdetails);
});