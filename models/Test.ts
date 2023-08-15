import mongoose from "mongoose";

const Schema = mongoose.Schema;

const testShema = new Schema({
  hola: { type: String },
});

export default mongoose.models.Test || mongoose.model("Test", testShema);
