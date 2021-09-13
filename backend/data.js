import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Zain",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Nike Jacket",
      category: "Shirts",
      image: "/images/p1.jpeg",
      price: 120,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Addidas Jacket",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 50,
      countInStock: 20,
      brand: "Addidas",
      rating: 4.0,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Lacoste Jacket",
      category: "Jacket",
      image: "/images/p3.jpg",
      price: 180,
      countInStock: 0,
      brand: "Lacoste",
      rating: 3.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Zara Winter Jacket",
      category: "Jacket",
      image: "/images/p4.jpg",
      price: 120,
      countInStock: 15,
      brand: "Zara",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Nike Jackets",
      category: "winter jacket",
      image: "/images/p5.jpg",
      price: 112,
      countInStock: 20,
      brand: "Nike",
      rating: 4.5,
      numReviews: 19,
      description: "high quality product",
    },
  ],
};

export default data;
