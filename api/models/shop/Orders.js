const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  item_name: {
    type: "string",
    required: true,
  },
  type: {
    type: "string",
    required: true,
  },
  description: {
    type: "string",
    required: true,
  },
  price: {
    type: "number",
    required: true,
  },
  quantity: {
    type: "number",
    required: true,
  },
  user_email: {
    type: "string",
    required: true,
  },
  order_id: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("Orders", orderSchema);
