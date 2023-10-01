import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShopCard from "../components/ShopCard";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState("All"); 
  const [sortBy, setSortBy] = useState("price"); 
  const data = useLoaderData();

  useEffect(() => {
    setProducts(data.data);
  }, [data]);


  const filteredProducts =
    filterCategory === "All"
      ? products
      : products.filter((product) => product.category === filterCategory);

  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price") {
      return a.price - b.price;
    } else if (sortBy === "name") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  return (
    <div>
      

      
      <div className="flex " >
      <div>
        <label>Filter by Category:</label>
        <select
          onChange={(e) => setFilterCategory(e.target.value)}
          value={filterCategory}
        >
          <option value="All">All</option>
         
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        
        </select>
      </div>
      <div>
        <label>Sort by:</label>
        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>
      </div>
      </div>
       <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
      {sortedProducts.map((item) => (
        <ShopCard key={item._id} product={item} />
      ))}
      </div>
    </div>
  );
};

export default Shop;
