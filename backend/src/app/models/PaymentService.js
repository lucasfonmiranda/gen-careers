import mongoose, { Schema } from 'mongoose';

const PaymentService = new Schema({
  name: {
    type: String,
    required: true,
  },
  transactions: [{ type: Schema.Types.ObjectId, ref: 'Transaction' }],
});

export default mongoose.model('PaymentService', PaymentService);
