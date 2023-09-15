import React, { useEffect, useState } from "react";
import "../Styles/Home.scss";
import data from '../db.json'

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data.products)
  }, [])
  
  return (
    <>
      <h1>products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Home;
