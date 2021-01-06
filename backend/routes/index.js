const router = require("express").Router()

router.get("/", (req, res, next) => {
  res.status(200).json({ msg: "Server running :D" })
})


module.exports = router
