const express = require("express")
const router = express.Router()
const {
  getBars,
  getBar,
  addBar,
  updateBar,
  deleteBar,
  getBarByLocation,
  getBarsInRange,
} = require("../controllers/bar.controller")

router.get("/", getBars)
router.get("/range", getBarsInRange)
router.get("/loc", getBarByLocation)
router.get("/:id", getBar)
router.post("/", addBar)
router.put("/:id", updateBar)
router.delete("/:id", deleteBar)

module.exports = router
