require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const barRoute = require("./routes/bar.route")

const getConnectionString = (username, password) =>
  `mongodb+srv://${encodeURIComponent(username)}:${encodeURIComponent(
    password
  )}@happier-hour-db-0.ixnmich.mongodb.net/bars-0?retryWrites=true&w=majority&appName=happier-hour-db-0`
const connectionString = getConnectionString(
  process.env.MONGO_DB_USERNAME,
  process.env.MONGO_DB_PASSWORD
)

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use("/api/bars", barRoute)

app.get("/", (req, res) => {
  res.send("MVP BAR API")
})

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("connected to database")

    app.listen(3000, () => {
      console.log("server running")
    })
  })
  .catch((e) => console.error("not connected: ", e))
