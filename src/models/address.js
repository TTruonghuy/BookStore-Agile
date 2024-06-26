import mongoose from "mongoose";

const NewAddressSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    fullName: String,
    address: String,
    city: String,
    country: String,
    numberPhone: String,
  },
  { timestamps: true }
);

const Address =
  mongoose.models.Address || mongoose.model("Address", NewAddressSchema);

export default Address;
