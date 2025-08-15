import { Schema, model, Types } from 'mongoose';

const CartItemSchema = new Schema({
  product: { type: Types.ObjectId, ref: 'Product' },
  title: String,
  image: String,
  price: Number,
  currency: String,
  quantity: Number,
  seller: { type: Types.ObjectId, ref: 'User' },
  variantSku: String
});

const CartSchema = new Schema(
  {
    buyer: { type: Types.ObjectId, ref: 'User', unique: true },
    items: [CartItemSchema]
  },
  { timestamps: true }
);

export default model('Cart', CartSchema);
