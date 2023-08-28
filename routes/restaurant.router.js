const express = require("express");
const router = express.Router();
const Restaurant = require("../controllers/restaurant.controller")
const {getAll,getId,createRes,deleteId,updateres} = require("../controllers/restaurant.controller")
// router.post("/restaurant", async(req,res)=>{
//     try{
//         const newRestaurant = req.body;
//         const createRestaurant = await Restaurant.createRestaurant(newRestaurant)
//         res.status(201).json(createRestaurant);
//     }catch(err){
//         res.status(500).json({err:"fail to create restaurant"});
//     }
// });
// router.get("/restaurant", async (req,res)=>{
//     try {
        
//         const getAllRestaurant = await Restaurant.getAll()
//         res.status(202).json(getAllRestaurant);
//     } catch (err) {
//          res.status(500).json({err:"fail to get all user"})
//     }
// })

// router.get("/restaurant/:id", async (req,res)=>{
//     try {
//         const idRes = Number.parseInt(req.params.id)
//         const getByIdRestaurant = await Restaurant.getById(idRes);
//         res.status(201).json(getByIdRestaurant);

//     } catch (error) {
//         res.status(502).json({err:"fail to get user"})
//     }

// })


router.get("/restaurant", getAll)
router.get("/restaurant/:id", getId)
router.post("/restaurant", createRes)
router.delete("/restaurant/:id", deleteId)
router.put("/restaurant/:id", updateres)
module.exports = router;