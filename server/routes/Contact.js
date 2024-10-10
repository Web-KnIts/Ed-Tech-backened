const express = require("express")
const router = express.Router()
const { contactUsController } = require("../controller/contactUsController")

router.post("/contact", contactUsController)

module.exports = router
