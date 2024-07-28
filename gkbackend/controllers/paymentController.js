// controllers/paymentController.js
const { PaymentInfo } = require('../db/PaymentInfo');

const savePaymentInfo = async (req, res) => {
  try {
    const { email, paymentMethod, creditCardDetails, debitCardDetails, netBankingDetails, upiDetails } = req.body;

    // Prepare data based on payment method
    const paymentData = {
      email,
      paymentMethod,
      ...(paymentMethod === 'credit-card' ? creditCardDetails : {}),
      ...(paymentMethod === 'debit-card' ? debitCardDetails : {}),
      ...(paymentMethod === 'net-banking' ? netBankingDetails : {}),
      ...(paymentMethod === 'upi' ? upiDetails : {}),
    };

    const paymentInfo = await PaymentInfo.create(paymentData);
    res.status(201).json({ success: true, paymentInfo });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to save payment information' });
  }
};

const getPaymentInfoByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const payments = await PaymentInfo.findAll({ where: { email } });

    if (payments.length === 0) {
      return res.status(404).json({ success: false, message: 'No payments found for this email' });
    }

    res.status(200).json({ success: true, payments });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Failed to retrieve payment information' });
  }
};

module.exports = {
  savePaymentInfo,
  getPaymentInfoByEmail,
};
