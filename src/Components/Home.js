import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "styled-components";
import "../Styles/Home.scss";
import { Link } from "react-router-dom";

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  font-family: sans-serif;
`;

const Home = () => {
  const [products, setProducts] = useState([]);
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    fetchData();
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps */
  const baseURL = `http://localhost:3001`;
  const fetchData = async () => {
    try {
      const response = await axios.get(`${baseURL}/products`);
      setProducts(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

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
  );
};

export default Home;
