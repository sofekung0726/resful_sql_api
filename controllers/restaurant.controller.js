
const Restaurant = require("../models/restaurant.model");
// Restaurant.createRestaurant = async(newRestaurant)=>{
//     try {
//         const createRestaurant = await Restaurant.create(newRestaurant)
//         console.log("create restaurant :",createRestaurant.toJSON());
//         return createRestaurant.toJSON();
//     } catch (error) {
//         console.log("err", err);
//         throw err;
//     }
// }
const createRes = async (req, res) => {
    const { name, type, imageurl } = req.body;
    if (!name || !type || !imageurl) {
        return res.status(400).send("Check");
    }

    try {

        const result = await Restaurant.create({ name, type, imageurl })
        res.status(201).json({ result })
    } catch (err) {
        console.log("err", err);
        res.status(500)
    }
}

const getAll = async (req, res) => {

    try {
        const allRestaurant = await Restaurant.findAll()
        const result = allRestaurant.map((restaurant)=> {return restaurant.toJSON()})
        console.log("get user all", allRestaurant);
        res.status(200).json(result)
        // return allRestaurant.map((restaurant)=> restaurant.toJSON())
    } catch (err) {
        console.log("err", err);
        res.status(500)
    }
}

const getId = async (req, res) => {
    try {

        const idRes = req.params.id
        const Restaurants = await Restaurant.findOne({ where: { id: idRes } })
        res.status(200).json({ Restaurants })
    } catch (err) {
        console.log("err", err);
        res.status(500)

    }
}

const deleteId = async (req, res) => {
    const iddele = req.params.id
    try {

        // const restaurants = await Restaurant.findOne({ where: { id: iddele } })
        const restaurants = await Restaurant.destroy({ where: { id: iddele } })
        console.log(restaurants);
        if (restaurants == 0) {
            return res.status(404).send("Fail")
        }
        // if (!restaurants) {
        //    return res.status(400)
        // }else{
        //     await restaurants.destroy();
        //     return res.status(200).send("delete suscess")
        // }
        res.status(200).json({
            restaurants
        })

    } catch (err) {
        console.log("err", err);
        res.status(500)
    }
}
const updateres = async (req, res) => {
    const id = req.params.id
    const {name , type , imageurl} = req.body
    if (!name || !type || !imageurl) {
        return res.status(404).send("Fail")
    }
    try {
        const result = await Restaurant.findOne({where : {id:id}})
        if (!result) {
            return res.status(400).send("did find id"+id)
        }
    await Restaurant.update({name,type,imageurl},{where :{id:id}})
        res.status(200).send("update เรียบร้อย")
        
    }
    catch (err) {
        console.log("err", err);
        res.status(500)
    }
}
// Restaurant.getById = async(idRes)=> {
//     try {
//         const getByIdRestaurant = await Restaurant.findOne({ where : {id : idRes}})
//         return getByIdRestaurant
//     } catch (err) {
//         console.log("err",err);
//     }
// }
module.exports = { getAll, getId, createRes, deleteId, updateres };