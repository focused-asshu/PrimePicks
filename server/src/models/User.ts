import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, index: true, unique: true, required: true },
    password: { type: String, required: true, select: false },
    role: { type: String, enum: ['buyer', 'seller', 'admin'], default: 'buyer' },
    addresses: [
      { label: String, line1: String, line2: String, city: String, state: String, postalCode: String, country: String }
    ],
    seller: { shopName: String, shopSlug: { type: String, index: true }, verified: { type: Boolean, default: false }, payoutEmail: String }
  },
  { timestamps: true }
);

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  // @ts-ignore
  this.password = await bcrypt.hash(this.password, await bcrypt.genSalt(10));
  next();
});

UserSchema.methods.comparePassword = async function (candidate: string) {
  // @ts-ignore
  return bcrypt.compare(candidate, this.password);
};

export default model('User', UserSchema);
