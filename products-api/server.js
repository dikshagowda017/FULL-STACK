const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Root route (for testing)
app.get("/", (req, res) => {
  res.send("Welcome to the Product API! Use /products to view products.");
});

// Sample data (static products)
let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 800 },
  { id: 3, name: "Keyboard", price: 1200 },
];

// GET /products → return all products
app.get("/products", (req, res) => {
  res.json(products);
});

// POST /products → add a new product
app.post("/products", (req, res) => {
  const newProduct = { id: products.length + 1, ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// GET /products/:id → get one product by id
app.get("/products/:id", (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) res.json(product);
  else res.status(404).send("Product not found");
});

// PUT /products/:id → update a product
app.put("/products/:id", (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    product.name = req.body.name;
    product.price = req.body.price;
    res.json(product);
  } else {
    res.status(404).send("Product not found");
  }
});

// DELETE /products/:id → delete a product
app.delete("/products/:id", (req, res) => {
  const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  if (productIndex !== -1) {
    products.splice(productIndex, 1);
    res.send("Product deleted");
  } else {
    res.status(404).send("Product not found");
  }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
