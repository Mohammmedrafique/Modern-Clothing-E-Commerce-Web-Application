import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShopCard from "../components/ShopCard";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState("All");
  const [sortBy, setSortBy] = useState("priceAsc"); // Default to ascending order
  const [searchQuery, setSearchQuery] = useState("");
  const data = useLoaderData();

  useEffect(() => {
    setProducts(data.data);
  }, [data]);

  const filteredProducts =
    filterCategory === "All"
      ? products
      : products.filter((product) => product.category === filterCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "priceAsc") {
      return a.price - b.price;
    } else if (sortBy === "priceDesc") {
      return b.price - a.price;
    } else if (sortBy === "name") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  const searchedProducts = sortedProducts.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div
        style={{
          display: "flex",
          marginLeft: "400px",
          marginTop: "10px",
        }}
      >
        <div style={{ marginRight: "10px" }}>
          <label style={{ fontWeight: "bold" }}>Filter by Category:</label>
          <select
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "16px",
            }}
            onChange={(e) => setFilterCategory(e.target.value)}
            value={filterCategory}
          >
            <option value="All">All</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kids">Kids</option>
          </select>
        </div>
        <div style={{ marginRight: "10px" }}>
          <label style={{ fontWeight: "bold" }}>Sort by:</label>
          <select
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "16px",
            }}
            onChange={(e) => setSortBy(e.target.value)}
            value={sortBy}
          >
            <option value="priceAsc">Price (Low to High)</option>
            <option value="priceDesc">Price (High to Low)</option>
            <option value="name">Name</option>
          </select>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            width: "300px",
            textAlign: "center",
          }}
        >
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              fontSize: "16px",
            }}
          />
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {searchedProducts.map((item) => (
          <ShopCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
