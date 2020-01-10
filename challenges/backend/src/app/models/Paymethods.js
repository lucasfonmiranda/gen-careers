import mongoose from 'mongoose';

const PaymethodSchema = new mongoose.Schema(
  {
    name_client: {
      type: String,
      allowNull: false,
      required: true,
      unique: true,
    },
    payment: {
      type: String,
      enum: ['Picpay', 'MercadoPago', 'PagSeguro', 'Paypal'],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Paymethod', PaymethodSchema);
