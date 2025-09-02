const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    image: "https://via.placeholder.com/150",
    specs: ["Spec 1"],
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    image: "https://via.placeholder.com/150",
    specs: ["Spec 2"],
  },
  {
    id: 3,
    name: "Product 3",
    price: 300,
    image: "https://via.placeholder.com/150",
    specs: ["Spec 3"],
  },
];

let cart = [];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/cart", (req, res) => {
  res.json(cart);
});

app.post("/cart", (req, res) => {
  const { id } = req.body;
  const product = products.find((p) => p.id === id);
  if (product) {
    cart.push(product);
    res.json({ message: "Added to cart", cart });
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
