import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const products = useSelector((store) => store.allProducts.product);

  // Filter products by category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // Sort products by price
  const sortedProducts = sortOrder
    ? [...filteredProducts].sort((a, b) =>
        sortOrder === "asc" ? a.price - b.price : b.price - a.price
      )
    : filteredProducts;

  const renderList = sortedProducts.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          {" "}
          <div className="ui link cards">
            <div className="card">
              <div className="image" style={{ height: "300px" }}>
                <img src={image} alt={title} style={{ height: "70%" }} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="category">Filter by Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>
      <br />
      <div>
        <label htmlFor="sort-order">Sort by Price:</label>
        <select
          id="sort-order"
          value={sortOrder}
          onChange={handleSortOrderChange}
        >
          <option value="">None</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <br />
      <div className="ui grid container">{renderList}</div>
    </div>
  );
};

export default ProductComponent;
