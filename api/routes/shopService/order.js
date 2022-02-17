const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { v1: uuidv1 } = require("uuid");
const Orders = require("../../models/shop/Orders");

router.get("/", (req, res, next) => {
  res.send("This is the orders route for the shop");
});

router.get("/viewall", async (req, res) => {
  try {
    const order = await Orders.find();
    res.json(order);
  } catch (error) {
    res.json({
      message: "Error while finding the orders in the collection",
    });
  }
});

router.get("/get/:order_id", async (req, res) => {
  try {
    const order = await Orders.find({ order_id: req.params.order_id });

    let unique = {
      isUnique: true,
      message: "",
    };

    if (order.length > 1) {
      unique.isUnique = false;
      unique.message = "There are more than one value for this ID";
    } else {
      unique.isUnique = true;
      unique.message = "There is only one value under this ID";
    }

    let response = {
      status: "200 OK",
      result: order[0],
      state: unique,
    };

    res.json(response);

  } catch (error) {
    let response = {
      error: error,
      errorMessage: error.message,
      message: "Error while getting the order",
    };
    res.json(response);
  }
});

router.post("/", async (req, res) => {
  const order = new Orders({
    _id: new mongoose.Types.ObjectId(),
    item_name: req.body.item_name,
    type: req.body.type,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
    user_email: req.body.user_email,
    order_id: uuidv1(),
  });

  try {
    const result = await order.save();
    let response = {
      status: "200 OK",
      message: "Saved Successfully",
      result: result,
      order_id: order.order_id,
    };
    res.json(response);
  } catch (err) {
    let response = {
      error: err,
      errorMessage: err.message,
      message: "Error while saving the order",
    };
    res.json(response);
  }
});

module.exports = router;