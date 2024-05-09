const mongoose = require("mongoose")

const BarSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a bar name"],
    },
    yelpId: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: [true, "Bar must have an address"],
    },
    googleMapsLink: {
      type: String,
      required: [true, "Bar must have a Google Maps Link"],
    },
    happyHourDays: {
      type: String,
      required: [true, "Bar must have listed days for happy hour"],
    },
    happyHourHours: {
      type: String,
      required: [true, "Bar must have listed hours for happy hour"],
    },
    indoor: {
      type: String,
      required: false,
    },
    outdoor: {
      type: String,
      required: false,
    },
    monday: {
      type: String,
      required: false,
    },
    tuesday: {
      type: String,
      required: false,
    },
    wednesday: {
      type: String,
      required: false,
    },
    thursday: {
      type: String,
      required: false,
    },
    friday: {
      type: String,
      required: false,
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

const Bar = mongoose.model("Bar", BarSchema)

module.exports = Bar
