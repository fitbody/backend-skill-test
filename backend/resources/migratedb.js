require("dotenv").config()
const fs = require("fs")
const mongoose = require("mongoose")
const Todo = require("../models/Todo")

mongoose
  .connect(process.env.DB || "mongodb://localhost/backend-skill-test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    Todo.find()
      .then((data) => {
        console.log("data", data)
        return JSON.stringify(data)
      })
      .then((jsonData) => {
        fs.writeFile("db.json", jsonData, "utf8", (err) => {
          if (err) {
            console.log(
              "Something went wrong when trying to save info, please try again."
            )
            return console.log(err)
          }
          mongoose.connection.close()
          console.log("Data from DB has been saved! :D")
        }).catch((err) =>
          console.log("An error ocurred when saving data to file.")
        )
      })
      .catch((err) => console.log("An error ocurred parsing data to Json"))
  })
  .catch((err) => console.error("Error connecting to mongo", err))
