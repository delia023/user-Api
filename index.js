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

app.get("/product",(request, response)=>{
    // response.send("Welcome to your Node Class.")
    response.json({
        "Products": [
            {   "id": 1,
          "title": "Charger SXT RWD",
          "price": 32999.99,
          "quantity": 3,
          "total": 98999.97,
          "discountPercentage": 13.39,
          "discountedTotal": 85743.87,},
            {  "id": 2,
          "title": "Apple MacBook Pro 14 Inch Space Grey",
          "price": 1999.99,
          "quantity": 2,
          "total": 3999.98,
          "discountPercentage": 18.52,
          "discountedTotal": 3259.18, },
            {  "id": 3,
          "title": "Green Oval Earring",
          "price": 24.99,
          "quantity": 5,
          "total": 124.95,
          "discountPercentage": 6.28,
          "discountedTotal": 117.1,},
            {  "id": 4,
          "title": "Green Oval Earring",
          "price": 24.99,
          "quantity": 5,
          "total": 124.95,
          "discountPercentage": 6.28,
          "discountedTotal": 117.1, },
            { 
          "id": 5,
          "title": "Cricket Helmet",
          "price": 44.99,
          "quantity": 4,
          "total": 179.96,
          "discountPercentage": 11.47,
          "discountedTotal": 159.32, },
            { "id": 6,
          "title": "Golf Ball",
          "price": 9.99,
          "quantity": 4,
          "total": 39.96,
          "discountPercentage": 11.24,
          "discountedTotal": 35.47,},
            {  "id": 7,
          "title": "Selfie Lamp with iPhone",
          "price": 14.99,
          "quantity": 5,
          "total": 74.95,
          "discountPercentage": 19.87,
          "discountedTotal": 60.06, }



        ]
        
    })
 
   
})
const port = 8008
app.listen(port,()=>{
console.log(`app started at port ${port}`);


})
