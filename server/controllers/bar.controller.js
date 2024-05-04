const Bar = require("../models/bar.model")

const getBars = async (req, res) => {
  console.log("getBars")
  try {
    const bars = await Bar.find({})
    res.status(200).json(bars)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

const getBar = async (req, res) => {
  console.log(2)
  try {
    const { id } = req.params
    const bar = await Bar.findById(id)
    res.status(200).json(bar)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

const addBar = async (req, res) => {
  console.log(5)
  try {
    const bar = await Bar.create(req.body)
    res.status(200).json(bar)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

const updateBar = async (req, res) => {
  console.log(6)
  try {
    const { id } = req.params

    const bar = await Bar.findByIdAndUpdate(id, req.body)
    console.log(bar)
    if (!bar) return res.status(404).json({ message: "Bar not found" })

    const updatedBar = await Bar.findById(id)

    res.status(200).json(updatedBar)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

const deleteBar = async (req, res) => {
  try {
    const { id } = req.params

    const bar = await Bar.findByIdAndDelete(id)

    if (!bar) return res.status(404).json({ message: "Bar not found" })

    res.status(200).json({ message: "Bar deleted successfully" })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

const getBarByLocation = async (req, res) => {
  console.log("getBarByLocation")

  try {
    const bar = await Bar.findOne({
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    })
    console.log("hello")
    res.status(200).json(bar)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

const getBarsInRange = async (req, res) => {
  console.log("getBarsInRange")
  try {
    const bars = await Bar.find({
      latitude: {
        $gt: req.body.latitude - 0.005,
        $lt: req.body.latitude + 0.005,
      },
      longitude: {
        $gt: req.body.longitude - 0.005,
        $lt: req.body.longitude + 0.005,
      },
    })

    res.status(200).json(bars)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

module.exports = {
  getBars,
  getBar,
  addBar,
  updateBar,
  deleteBar,
  getBarByLocation,
  getBarsInRange,
}
