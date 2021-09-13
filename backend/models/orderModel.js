import mongoose from "mongoose";

// define order schema
const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        // its is link to a product model.. to create a link we need to define a field and for the type of the field instead of using string we use special type of objectid in mongoose
        product: {
          type: mongoose.Schema.Types.ObjectId,
          //after setting this^.. we need to define the reference.. ref is Product object
          ref: "Product",
          required: true,
        },
      },
    ],
    shippingAddress: {
      fullName: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
    //next field is payment method
    paymentMethod: { type: String, required: true },
    paymentResult: {
      id: String,
      status: String,
      update_time: String,
      email_address: String,
    },
    itemsPrice: { type: Number, require: true },
    shippingPrice: { type: Number, require: true },
    taxPrice: { type: Number, require: true },
    totalPrice: { type: Number, require: true },
    // the user that create that order..type is mongooseobjectid bcause user in this model is linked to the user model
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    // next field is about the status of this order isit paid
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
  },
  {
    // second paramter of order
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
