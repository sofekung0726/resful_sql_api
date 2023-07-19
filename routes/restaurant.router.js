const express = require("express");
const router = express.Router();
const Restaurant = require("../controllers/restaurant.controller")

router.post("/restaurant", async(req,res)=>{
    try{
        const newRestaurant = req.body;
        const createRestaurant = await Restaurant.createRestaurant(newRestaurant)
        res.status(201).json(createRestaurant);
    }catch(err){
        res.status(500).json({err:"fail to create restaurant"});
    }
});
// router.get("/restaurant", async (res)=>{
//     try {

//         const getAllRestaurant = await Restaurant.findAll(getAllRestaurant)
//         res.status(202).json(getAllRestaurant);
//     } catch (err) {
//         res.status(500).json({err:"fail to get user"})
//     }
// })

module.exports = router;