import mongoose, { Schema } from 'mongoose';

const ClientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  transactions: [{ type: Schema.Types.ObjectId, ref: 'Transaction' }],
});

export default mongoose.model('Client', ClientSchema);
