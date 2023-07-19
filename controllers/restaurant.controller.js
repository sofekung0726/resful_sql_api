const Restaurant = require("../models/restaurant.model");

Restaurant.createRestaurant = async(newRestaurant)=>{
    try {
        const createRestaurant = await Restaurant.create(newRestaurant)
        console.log("create restaurant :",createRestaurant.toJSON());
        return createRestaurant.toJSON();
    } catch (error) {
        console.log("err", err);
        throw err;
    }
}
// Restaurant.getAll = async(Restaurant)=>{
//     try{
//         const res = await Restaurant.findAll(getAllRestaurant)
//         console.log("get user all",getAllRestaurant.toJSON());
//         return getAllRestaurant.toJSON();
//     }catch (err){
//         console.log("err",err);
        
//     }
// }
module.exports = Restaurant;