const express=require('express')
// 1. create a new router
const router=new express.Router()
//here router.js ko koi idea nhi ki Student naam ka collection khn se aara
const Dish=require("../models/dishes")

//2. we need to define the router mathods like get post we can do this thorugh router
// router.get("/thapa",(req,res)=>{
//     res.send("hey whatspp guys")
//     //at this point we cant get localhost:3000/thapa bcz hmne abhi tk express ko nhi btaya ki hm router use krre so we need to register our router
// })

//create a new students
router.post("/dishes",(req,res)=>{
    console.log(req.body)
    const user=new Dish(req.body)
    // yeh jo data hme milra yeh promise return krra either promise will be fulfilled or rejected
    //hmara data db pr store hoje use user.save()
    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((err)=>{
        res.status(400).send(err)
    })

    res.send("hello from other side")
})

//read the data of registred dtaa 
router.get("/dishes",async(req,res)=>{
    
    res.end('Will send all the dishes to you!');
})
//find by id
router.get("/dishes/:id",async(req,res)=>{
    try {
       const _id=req.params.id
       const dishdata=await Dish.findById({_id})
       if(!dishdata)
       {
           return res.status(404).send()
       }
       else
       {
        res.send(dishdata)
       }
    } catch (err) {
        res.status(500).send(err)
    }
})

// delete the students by id
router.delete("/dish/:id",async(req,res)=>{
    try {
        const _id=req.params.id
        const deletedata=await Dish.findByIdAndDelete(_id)
        if(!_id)//ie if user enters invalid id
        {
            return res.status(404).send()
        }
        else{
            res.send(deletedata)
        }
    } catch (err) {
        // status 500 means server error
        res.send(500).send(err)
    }
})

//update the students by id
router.patch("/dishe/:id",async(req,res)=>{
    try {
        const _id=req.params.id
        const updateDish=await Dish.findByIdAndUpdate(_id,req.body,{
            new:true
        })
        res.send(updateDish)


    } catch (err) {
        res.status(404).send(updateDish)
    }
})

module.exports=router
