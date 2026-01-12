import mongoose from "mongoose";

const popupSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  description: String,
}, { timestamps: true });

export default mongoose.models.HardwarePopup ||
  mongoose.model("HardwarePopup", popupSchema);