exports.isAuth = (req, res, next) => {
  req.isAuthenticated()
    ? next()
    : res.status(401).json({ message: "Log in first!" })
}
