const express = require("express");
const router = express.Router();

const {
  createPayment,
  getPaymentById,
  refundPayment,
} = require("../controller/paymentcontroller");

router.post("/payments", createPayment);
router.get("/payments/:id", getPaymentById);
router.post("/payments/refund", refundPayment);

module.exports = router;