const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const products = [
  {
    id: 1,
    name: "Royal Gold Necklace",
    category: "Necklaces",
    price: 45999,
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700"
  },
  {
    id: 2,
    name: "Classic Diamond Ring",
    category: "Rings",
    price: 28999,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700"
  },
  {
    id: 3,
    name: "Elegant Gold Earrings",
    category: "Earrings",
    price: 18999,
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700"
  },
  {
    id: 4,
    name: "Golden Bracelet",
    category: "Bracelets",
    price: 22999,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=700"
  }
];

app.get("/", (req, res) => {
  res.json({ message: "BSSONS Jewellers API is running!" });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "OK", service: "BSSONS Backend" });
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find(
    (item) => item.id === Number(req.params.id)
  );

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`BSSONS Backend running on port ${PORT}`);
});
