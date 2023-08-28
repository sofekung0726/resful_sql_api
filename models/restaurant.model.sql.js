const sql = require("./db");

//constructir
const Restaurant = function (restaurant) {
    //atrributes
    this.name = restaurant.name;
    this.type = restaurant.type;
    this.imageurl = restaurant.imageurl;

}

//Method

Restaurant.create = (newRestaurant, result) => {
    //INSERT INTO restaorant SET name,type,imageurl VALUES ("KFC","Fastfood","url")
    sql.query("INSERT INTO restaurants SET ?", newRestaurant, (err, res) => {
        //have err
        if (err) {
            console.log("err", err);
            result(err, null);
            return;
        }
        // no err
        console.log("U got new restaurant");
        result(null, { id: res.id, ...newRestaurant })
    });
};

Restaurant.getAll = (result) => {
    //SELECT * FROM restaurant
    sql.query("SELECT * FROM restaurants", (err, res) => {
        if (err) {
            console.log("err", err);
            result(err, null);
            return;
        }
        // no err
        console.log("U got All restaurant");
        result(null, res)
    })
}

Restaurant.getById = (restaurantId, result) => {
    //SELECT * From restaurants WHERE id = restaurantId
    sql.query(`SELECT * FROM restaurants WHERE id =${restaurantId}`,
        (err, res) => {
            if (err) {
                console.log("err", err);
                result(err, null);
                return;
            }
            // found 1 row
            console.log("U got  restaurant by id");
            if (res.length) {
                result(null, res[0])
                return;
            }

            result({ kind: "not found" }, null);
        }
    )
}

Restaurant.updateById = (id, restaurant, result) => {
    //UPDATE restaurants SET name = VALUES ("name","type","imageurl") WHERE id = id;
    sql.query("UPDATE restaurants SET name = ?, type= ? , imageurl=? WHERE id = ?",
        [restaurant.name, restaurant.type, restaurant.imageurl, id],
        (err, res) => {
            if (err) {
                
                result(err, null)
                return;
            }
            if(res.affectedRows == 0){
                
                result({kind:"Not Found"}, null)
                
                return;
            }
          
            result(null,{id: id,...restaurant})
        })

}

Restaurant.deleteById = (restaurantId,result) =>{
    //DELETE FROM restaurants WHERE id = 6
    sql.query("DELETE FROM restaurants WHERE id =?", restaurantId ,(err,res)=>{
        if (err) {
            result(err, null)
            return;
        }
        if(res.affectedRows == 0){
            result({kind:"Not Found"}, null)
            return;
        }
        console.log("Restaurant id" + restaurantId + "is deleted");
        result(null,res);
    }) 
}

module.exports = Restaurant; 