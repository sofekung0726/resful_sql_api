const express = require("express");
const router = express.Router();
const Restaurant = require("../models/restaurant.model");
const { restart } = require("nodemon");

//insert restaurant to database

router.post("/restaurants", (req, res) => {
    const newRestaurant = new Restaurant({
        name: req.body.name,
        type: req.body.type,
        imageurl: req.body.imageurl

    });
    //insert to db
    Restaurant.create(newRestaurant, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occured while inserting new restaurant"
            });

        } else {
            res.send(data)
        }
    })
});
router.get("/restaurants", (req, res) => {
    Restaurant.getAll((err, data) => {
        if (err) {
            if (err) {
                res.status(500).send({
                    message:
                        err.message || "Some error occured while inserting new restaurant"
                })
            }
        } else {
            res.send(data)
        }
    })

})

router.get("/restaurants/:id", (req, res) => {
    const restaurantId = Number.parseInt(req.params.id);
    Restaurant.getById(restaurantId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(400).send({
                    message: "restaurant not found with this id " + restaurantId,
                }
                )
            } else {
                res.status(500).send({
                    message:
                        err.message ||
                        "Some error occured while inserting the new restaurant",
                });
            }
        } else {
            res.send(data);
        }
    })
});

router.put("/restaurants/:id", (req, res) => {
    const restaurantId = Number.parseInt(req.params.id);
    if (req.body.constructor === Object && Object.keys(req.body).lebgth === 0) {
        res.status(400).send({
            message: "Attributes can not be empty ! "
        })
    }
    Restaurant.updateById(restaurantId, new Restaurant(req.body), (err, data) => {
        if (err) {
            if (err.kind === "Not Found") {
                res.status(400).send({
                    message: "Restaurant not found with id " + restaurantId
                })
            }else {
                res.status(500).send({
                    message:
                        err.message ||
                        "Some error occured while inserting the new restaurant",
                });
            }
        }else {
            res.send(data);
        }
    })
})

router.delete("/restaurants/:id", (req,res)=>{
    const restaurantId = Number.parseInt(req.params.id);
    Restaurant.deleteById(restaurantId,(err,data)=>{
        if (err) {
            if (err.kind === "Not Found") {
                res.status(400).send({
                    message: "Restaurant not found with id " + restaurantId
                })
            }else {
                res.status(500).send({
                    message:
                        err.message ||
                        "Some error occured while inserting the new restaurant",
                });
            }
        }else {
            res.send({
                message: "Restaurant id"+ restaurantId +"is deleted"
            });
        }
    })
})


module.exports = router;