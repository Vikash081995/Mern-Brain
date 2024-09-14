import mongoose from "mongoose";
const { Schema } = mongoose;

const TaskSchema = new Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxLength: [20, "name can not be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export const TaskModel = mongoose.model("Task", TaskSchema);
