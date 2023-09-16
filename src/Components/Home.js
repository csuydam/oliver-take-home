import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import "../Styles/Home.scss";
import data from '../db.json';
import { Link } from 'react-router-dom';

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  font-family: sans-serif;
`;

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data.products)
  }, [])
  
  return (
    <Card>
      <h1>The products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <Link to={"/" + product.id}>see reviews</Link>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default Home;
