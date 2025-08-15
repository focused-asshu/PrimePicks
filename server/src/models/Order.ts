import { Schema, model, Types } from 'mongoose';

const OrderItem = new Schema({
  product: { type: Types.ObjectId, ref: 'Product' },
  title: String,
  image: String,
  price: Number,
  currency: String,
  quantity: Number,
  seller: { type: Types.ObjectId, ref: 'User' },
  variantSku: String
});

const OrderSchema = new Schema(
  {
    buyer: { type: Types.ObjectId, ref: 'User' },
    items: [OrderItem],
    subtotal: Number,
    tax: Number,
    shipping: Number,
    total: Number,
    currency: String,
    paymentStatus: { type: String, enum: ['pending', 'paid', 'failed', 'refunded'], default: 'pending' },
    paymentIntentId: String,
    status: { type: String, enum: ['created', 'processing', 'shipped', 'delivered', 'cancelled'], default: 'created' },
    shippingAddress: Schema.Types.Mixed,
    invoiceUrl: String
  },
  { timestamps: true }
);

export default model('Order', OrderSchema);
