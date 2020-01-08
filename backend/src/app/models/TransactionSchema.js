import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema(
  {
    email_client: {
      type: String,
      allowNull: false,
      required: true,
      unique: true,
    },
    payment_service: {
      type: String,
      enum: ['PagSeguro', 'Paypal', 'Stripe', 'Amazon Pay', 'WePay'],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Transaction', TransactionSchema);
