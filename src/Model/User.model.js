const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    FirstName: {
      type: String,
      required: [true, "FirstName Missing!!"],
      trim: true,
      min: [5, "Min 5 characters"],
      max: [25, "Max 25 characters!"],
    },
    LastName: {
      type: String,
      trim: true,
      min: [3, "Min 3 characters"],
      max: [10, "Max 10 characters!"],
    },
    Email_Address: {
      type: String,
      unique: true,
      required: [true, "Email Missing!!"],
    },
    Telephone: {
      type: String,
      unique: true,
      required: [true, "Telephone number Missing!!"],
      max: [11, "Invalid Number"],
    },
    Address1: {
      type: String,
      required: [true, "Address1 Missing!!"],
    },
    Address2: {
      type: String,
      required: [true, "Address2 Missing!!"],
    },
    City: {
      type: String,
      required: [true, "City Missing!!"],
    },
    PostCode: {
      type: String,
      min: [4, "Min 4 characters"],
      max: [6, "Max 6 characters!"],
    },
    Password: {
      type: String,
      required: true,
      trim: true,
    },
    OTP: {
      type: Number,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", UserSchema);
module.exports = { userModel };
