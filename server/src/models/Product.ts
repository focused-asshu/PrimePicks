import { Schema, model, Types } from 'mongoose';

const VariantSchema = new Schema({
  sku: String,
  price: Number,
  currency: { type: String, default: 'USD' },
  stock: Number,
  attributes: Schema.Types.Mixed
});

const ProductSchema = new Schema(
  {
    title: { type: String, required: true, index: 'text' },
    description: String,
    images: [String],
    category: { type: Types.ObjectId, ref: 'Category' },
    brand: String,
    variants: [VariantSchema],
    avgRating: { type: Number, default: 0 },
    ratingsCount: { type: Number, default: 0 },
    seller: { type: Types.ObjectId, ref: 'User', required: true },
    active: { type: Boolean, default: true },
    tags: [String]
  },
  { timestamps: true }
);

export default model('Product', ProductSchema);
