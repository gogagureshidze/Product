require("dotenv").config();
const Product = require("./modal");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const axios = require("axios"); 
const app = express();

mongoose.set("strictQuery", true);
app.use(express.json());
app.use(morgan("dev"));

// POST
app.post("/products", async (req, res) => {
  try {
    const { name, price, description, image } = req.body;

    const newProduct = new Product({
      name,
      price,
      description,
      image,
    });

    await newProduct.save();

    res.status(201).json({
      success: true,
      data: newProduct,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
});

// GET 
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    console.log("Products:", products);
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
});

// PUT /update
app.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description, image } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, description, image },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        error: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
});

// DELETE 
app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        error: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
});

// Database connection
mongoose
  .connect(
    "mongodb+srv://zalochkheidze:duJagFVstSkYgORA@colodress-products.aadyr.mongodb.net/colodress?retryWrites=true&w=majority"
  ) // Use the DB URI from the environment variables
  .then(() => {
    console.log("Connected to the database");

    // Start the server
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
