import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("projectModel", schema);
export default model;