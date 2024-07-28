// models/PaymentInfo.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('./dbConnectionsModel'); 

const PaymentInfo = sequelize.define('PaymentInfo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentMethod: {
    type: DataTypes.ENUM('credit-card', 'debit-card', 'net-banking', 'upi'),
    allowNull: false,
  },
  cardNumber: {
    type: DataTypes.STRING,
    allowNull: true, // Allow null for non-card payments
  },
  cardHolder: {
    type: DataTypes.STRING,
    allowNull: true, // Allow null for non-card payments
  },
  expiryDate: {
    type: DataTypes.STRING,
    allowNull: true, // Allow null for non-card payments
  },
  cvv: {
    type: DataTypes.STRING,
    allowNull: true, // Allow null for non-card payments
  },
  bankName: {
    type: DataTypes.STRING,
    allowNull: true, // Allow null for non-bank payments
  },
  accountNumber: {
    type: DataTypes.STRING,
    allowNull: true, // Allow null for non-bank payments
  },
  ifscCode: {
    type: DataTypes.STRING,
    allowNull: true, // Allow null for non-bank payments
  },
  upiId: {
    type: DataTypes.STRING,
    allowNull: true, // Allow null for non-UPI payments
  },
}, {
  sequelize,
  modelName: 'PaymentInfo',
  tableName: 'payment_info',
  timestamps: true,
});

PaymentInfo.sync()
  .then(() => console.log('payment_info table synced'))
  .catch(err => console.error('Failed to sync payment_info table:', err));

module.exports = { PaymentInfo };
