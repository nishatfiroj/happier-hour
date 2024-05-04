const mongoose = require("mongoose")

const BarSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a bar name"],
    },
    longitude: {
      type: Number,
      required: true,
      default: 0,
    },
    latitude: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
)

const Product = mongoose.model("Bar", BarSchema)

module.exports = Product
