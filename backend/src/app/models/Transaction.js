import mongoose, { Schema } from 'mongoose';

const Transaction = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: Schema.Types.String,
      required: true,
    },
    client: { type: Schema.Types.ObjectId, ref: 'Client' },
    paymentService: { type: Schema.Types.ObjectId, ref: 'PaymentService' },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Transaction', Transaction);
