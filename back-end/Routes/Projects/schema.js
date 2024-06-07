import mongoose from "mongoose";
const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    header: { type: String, required: true },
    description: {type: String, required: true},
    image_url: {type: String, required: true},
    active: {type: Boolean, required: true},
    
  },
  { collection: "projects" });
export default projectSchema;