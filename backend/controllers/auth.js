const User = require("../models/User")

exports.signup = async (req, res) => {
  User.register(req.body, req.body.password)
    .then((user) => res.status(201).json({ user }))
    .catch((err) => res.status(500).json({ err }))
}
exports.login = async (req, res) => {
  const { user } = req
  res.status(200).json({ user })
}
exports.logout = async (req, res) => {
  req.session.destroy()
  req.logout()
  res.status(200).json({ msg: "Logged out" })
}

exports.profile = async (req, res) => {
  if (req.user) {
    User.findById(req.user._id)
      .then((user) => res.status(200).json(user))
      .catch((err) => res.status(500).json({ err }))
  } else res.status(500).json({ user: null })
}
