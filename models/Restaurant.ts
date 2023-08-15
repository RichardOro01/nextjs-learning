import mongoose from "mongoose";

const Schema = mongoose.Schema;

const restaurantShema = new Schema({
  name: { type: String, required: [true, "Name required"] },
  restaurant_id: { type: String, required: [true, "ID required"] },
});

export default mongoose.models.Restaurant ||
  mongoose.model("Restaurant", restaurantShema);
