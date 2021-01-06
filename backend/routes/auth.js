const express = require("express")
const router = express.Router()
const passport = require("../config/passport")
const { signup, login, logout, profile } = require("../controllers/auth")

router.post("/signup", signup)

router.post("/login", passport.authenticate("local"), login)

router.get("/logout", logout)

router.get("/profile", profile)

module.exports = router
