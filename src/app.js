const express=require('express')
require("./db/conn")
const Dish=require("./models/dishes")
const DishRouter=require("./routers/router")
//here we have connected mongodb with express appliactaion


const app=express()
const port=process.env.PORT || 3000


app.use(express.json());

//registring our router on express
app.use(DishRouter)

app.listen(port,()=>{
    console.log("listening on port")
})