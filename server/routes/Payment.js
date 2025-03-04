// Import the required modules
const express = require("express")
const router = express.Router()
const {
  capturePayment,
  // verifySignature,
  verifyPayment,
  sendPaymentSuccessEmail,
} = require("../controller/paymentController")
const { auth, isInstructor, isStudent, isAdmin } = require("../middleware/authMiddleWare")
router.post("/capturePayment", auth, isStudent, capturePayment)
router.post("/verifyPayment", auth, isStudent, verifyPayment)
router.post(
  "/sendPaymentSuccessEmail",
  auth,
  isStudent,
  sendPaymentSuccessEmail
)
// router.post("/verifySignature", verifySignature)

module.exports = router