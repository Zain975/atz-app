import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

// import data from "./data.js";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";
import uploadRouter from "./routers/uploadRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// connect to mongoose
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/atz", {
  useNewUrlParser: true,
  // useUnifiedTopolgy: true,
  // useCreateIndex: true,
});
// define another api ... it show return details of products.
// app.get("/api/products/:id", (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: "Product not found" });
//   }
// });

// coment becase we r not return static data.
// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });
app.use("/api/uploads", uploadRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
// create a path for /slashapi/orders.. and the responder is orderRouter.
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
  // return paypalclientid...sb stands for sandbox
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// this middleware is error catcher
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
