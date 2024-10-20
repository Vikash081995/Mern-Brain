import mongoose from "mongoose";

const validator = require("validator");
const bcrypt = require("bcryptjs");

const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Please tell your name!"],
    minLength: 3,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: {
      validator: validator.isEmail,
      message: "Please provide email",
    },
  },
  photo: String,
  userpassword: {
    type: String,
    required: [true, "Please provide password"],
    minLength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm password"],
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  verificationToken: String,
  isVerified: {
    type: Boolean,
    default: false,
  },
  verfied: Date,
});

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.userpassword = await bcrypt.hash(this.userpassword, salt);
});

userSchema.methods.comparePassword = async function (candidatePassword: any) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

export const User = mongoose.model("User", userSchema);
