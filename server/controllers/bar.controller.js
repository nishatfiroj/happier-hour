const Bar = require("../models/bar.model")

const getBars = async (req, res) => {
  try {
    const bars = await Bar.find({})
    res.status(200).json(bars)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

const getBar = async (req, res) => {
  try {
    const { id } = req.params
    const bar = await Bar.findById(id)
    res.status(200).json(bar)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

const addBar = async (req, res) => {
  try {
    const bar = await Bar.create(req.body)
    res.status(200).json(bar)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

const updateBar = async (req, res) => {
  try {
    const { id } = req.params

    const bar = await Bar.findByIdAndUpdate(id, req.body)
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
  try {
    const bar = await Bar.findOne({
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    })
    res.status(200).json(bar)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

const getBarsInRange = async (req, res) => {
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

const getBarsByDay = async (req, res) => {
  try {
    const { days: daysRaw } = req.params
    const days = daysRaw.split("-")

    const mon = days.includes("mon")
      ? await Bar.find({ monday: { $ne: null } })
      : []
    const tue = days.includes("tue")
      ? await Bar.find({ tuesday: { $ne: null } })
      : []
    const wed = days.includes("wed")
      ? await Bar.find({ wednesday: { $ne: null } })
      : []
    const thu = days.includes("thu")
      ? await Bar.find({ thursday: { $ne: null } })
      : []
    const fri = days.includes("fri")
      ? await Bar.find({ friday: { $ne: null } })
      : []
    const sat = days.includes("sat")
      ? await Bar.find({ saturday: { $ne: null } })
      : []
    const sun = days.includes("sun")
      ? await Bar.find({ sunday: { $ne: null } })
      : []

    const aggregatedBars = [
      ...mon,
      ...tue,
      ...wed,
      ...thu,
      ...fri,
      ...sat,
      ...sun,
    ]

    res.status(200).json(aggregatedBars)
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
  getBarsByDay,
}
