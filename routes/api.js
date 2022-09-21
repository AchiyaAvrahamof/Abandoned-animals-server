const express=require('express')
const router=express.Router()
const Animal=require('../models/animal')
router.get('/animals',(req,res,next)=>{
    Animal.find({},["place",'size','color','vailent','problem','time','exstraDetails','photo','type','phoneNumber','email','name'])
    .then((data) => res.json(data))
    .catch(next)
})
    

router.post('/animals',(req,res,next)=>{
    // req.body.name && req.body.size && req.body.color && req.body.vailent && req.body.problem && req.body.time && req.body.photo && req.body.type && req.body.exstraDetails && req.body.phoneNumber && req.body.email && req.body.name?
    {Animal.create(req.body)
    .catch(next)
    console.log("posted")
    res.json({error:'dont have all the elements'})
}})

router.delete('/animals/:id', ( req,res,next) => {
    console.log("delete");
    Animal.findOneAndDelete({_id: req.params.id })
        .then((data) => res.json(data))
        .catch(next)
})




module.exports= router