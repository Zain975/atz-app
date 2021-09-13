import mongoose from "mongoose";

// creating schema for user
// user model should be a collection in mongodb database
// userschema is an object from mongoose.schema ...mongo.schema accept an object.this obejct contain all fields for user
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
