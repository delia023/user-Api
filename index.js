const express = require("express")
const app = express()


app.get("/user",(request, response)=>{
    // response.send("Welcome to your Node Class.")
    response.json({
        "user": [
            {  Id:1 , Name:"Joshua" , food:"Rice",Age :"13" },
            {  Id:2 , Name:"Ridwan" , food:"Beans",Age :"10" },
            {  Id:3 , Name:"Mary" , food:"Spaghetti",Age :"15" },
            {  Id:4 , Name:"Emmanuel" , food:"Pounded Yam",Age :"23" },
            {  Id:5, Name:"Patrick" , food:"Semo",Age :"20" },
            {  Id:6 , Name:"Ronald" , food:"Bread and Egg",Age :"18" },
            {  Id:7 , Name:"Abdullah" , food:"Yam and Egg",Age :"17" }



        ]
        
    })
   
})


const port = 8008
app.listen(port,()=>{
console.log(`app started at port ${port}`);


})
