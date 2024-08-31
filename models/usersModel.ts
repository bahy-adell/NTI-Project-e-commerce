import { Schema, model } from "mongoose";
import { Users } from "../interfaces/users";
import bcrypt from 'bcryptjs';

const addressSchema: Schema = new Schema({
  street: { type: String, required: true, trim: true },
  city: { type: String, required: true },
  country: { type: String, required: true }
});
const usersSchema: Schema = new Schema<Users>({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6, maxlength: 20 },
  image: String,
  role: { type: String, required: true, enum: ['manager', 'admin', 'user'], default: 'user' },
  active: { type: Boolean, default: true },
  wishlist: [{ type: Schema.Types.ObjectId, ref: 'products' }],
  passwordChangedAt: Date,
  resetCode: String,
  resetCodeExpireTime: Date,
  resetCodeVerify: Boolean,
  address: { type: addressSchema, required: true }
}, { timestamps: true });


usersSchema.pre<Users>('save', async function (next) {
  if (!this.isModified('password')) return next;
  this.password = await bcrypt.hash(this.password, 13)
});

export default model<Users>('users', usersSchema)