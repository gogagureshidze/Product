"use client"
import "./topproductsfilter.css"

import { useState } from "react";
import { products } from "./data/productsdata";

export default function TopProductsFilter() {
  const [filter, setFilter] = useState("All");

    let filteredProducts;
    if (filter === "All") {
        filteredProducts = products;
    } else {
        filteredProducts = products.filter((p) => p.category === filter);
    }


  return (
    <div className="container-1">
      {/* Filter Buttons */}
        <div className="buttons">
            <button  onClick={() => setFilter("All")} className={`${filter === "All" ? "active" : ""} buttonfirst`}
            >
            All
            </button>
            <button onClick={() => setFilter("Men")} className={filter === "Men" ? "active" : ""}>
            Men
            </button>
            <button onClick={() => setFilter("Woman")} className={filter === "Woman" ? "active" : ""}>
            Woman
            </button>
            <button onClick={() => setFilter("Accessories")} className={`${filter === "Accessories" ? "active" : ""} buttonlast`}>
            Accessories
            </button>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="sjeb">
              <div className="product-card">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
              <button className="button-1">Add To Cart</button>
            </div>
          ))}
        </div>

    </div>
  );
}
