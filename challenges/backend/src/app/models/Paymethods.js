import mongoose from 'mongoose';

const PaymethodSchema = new mongoose.Schema(
  {
    name_client: {
      type: String,
      allowNull: false,
      required: true,
      unique: false,
    },
    payment: {
      type: String,
      enum: ['PicPay', 'MercadoPago', 'PagSeguro', 'PayPal'],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Paymethod', PaymethodSchema);
