import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema(
  {
    client_email: {
      type: String,
      required: true,
    },
    authorization: {
      type: String,
      required: true,
    },
    payment_service: {
      type: String,
      enum: ['Stripe', 'Paypal', 'Mercado Pago'],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Transaction', TransactionSchema);
