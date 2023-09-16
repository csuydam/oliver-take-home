import React, { useEffect, useState } from 'react';
import Review from "./Review";
import data from '../db.json';
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
const Column = styled.div`
  background: #fff;
  max-width: 50%;
  width: 50%;
  float: left;
  height: 100vh;
  overflow-x: scroll;
  overflow-y: scroll;
  overflow: scroll;
`;
const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
const Main = styled.div`
  padding-left: 60px;
`;

function getReviewsByProductID(reviews, productId) {
  return reviews.filter((review) => review.productId === productId)
}

const Product = () => {
  const [product, setProduct] = useState([]);
  const [reviews, setReviews] = useState([]);
  const {id} = useParams();
  const productId = parseInt(id)
  useEffect(() => {
    const selectedProduct = data.products.find((p) => p.id === productId)
    if(selectedProduct) {
      setProduct(selectedProduct)

      //get reviews for the selected product
      const selectedReviews = getReviewsByProductID(data.reviews, productId)
      setReviews(selectedReviews)
    }
  }, [productId, data.products, data.reviews])
  let reviewsAll;
  if (reviews && reviews.length > 0) {
    reviewsAll = reviews.map((review) => {
      return (
        <Review
          key={review.id}
          author={review.author}
          headline={review.headline}
          body={review.body}
        />
      );
    });
  }
  return (
    <Wrapper>
      <Column>
        <Main>
          <div>{reviewsAll}</div>
        </Main>
      </Column>
    </Wrapper>
  )
}
export default Product;
