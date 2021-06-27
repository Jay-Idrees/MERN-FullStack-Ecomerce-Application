const express=require('express');



const app=express();


app.use('/',(req,res,next)=>{
    console.log('Hello from Express')
    res.send('<h1>Hello from Express !!! <h1>')
})


app.listen(3000)