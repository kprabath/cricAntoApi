const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { v1: uuidv1 } = require("uuid");
const Products = require("../../models/shop/Products");

router.get("/", (req, res, next) => {
  res.send("This is the products route for the shop");
});

router.get("/viewall", async (req, res) => {
  try {
    console.log("Viewing all the products");
    const product = await Products.find();
    res.json(product);
  } catch (error) {
    res.json({
      message: "Error while finding the products in the collection",
    });
  }
});

router.get("/get/:product_id", async (req, res) => {
  try {
    const product = await Products.find({ product_id: req.params.product_id });

    let unique = {
      isUnique: true,
      message: "",
    };

    if (product.length > 1) {
      unique.isUnique = false;
      unique.message = "There are more than one value for this ID";
    } else {
      unique.isUnique = true;
      unique.message = "There is only one value under this ID";
    }

    let response = {
      status: "200 OK",
      result: product[0],
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
  const product = new Products({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    type: req.body.type,
    description: req.body.description,
    price: req.body.price,
    quantity: req.body.quantity,
    product_id: uuidv1(),
  });

  try {
    const result = await product.save();
    let response = {
      status: "200 OK",
      message: "Saved Successfully",
      result: result,
      product_id: product.product_id,
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