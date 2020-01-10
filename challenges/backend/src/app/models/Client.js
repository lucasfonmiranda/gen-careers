import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      allowNull: false,
      required: true,
    },
    email: {
      type: String,
      allowNull: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Clients', ClientSchema);
