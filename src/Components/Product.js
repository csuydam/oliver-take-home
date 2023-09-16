import React, { useEffect, useState } from "react";
import Review from "./Review";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import ReviewForm from "./ReviewForm";
import axios from "axios";
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

const Product = () => {
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState([]);
  const { id } = useParams();
  const productId = parseInt(id);
  useEffect(() => {
    axios
      .get("http://localhost:3001/reviews")
      .then((response) => {
        const selectedReviews = response.data.filter(
          (review) => review.productId === productId
        );
        setReviews(selectedReviews);
      })
      .catch((error) => {
        console.log("Error fetching reviews:", error);
      });
  }, [productId]);

  const handleChange = (e) => {
    e.preventDefault();
    setReview(Object.assign({}, review, { [e.target.name]: e.target.value }));
  };

  const setRating = (score, e) => {
    e.preventDefault();
    setReview({ ...review, score });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const productId = parseInt(product.id);
    axios.post("http://localhost:3001/reviews", {...review, productId})
    .then((response) => {
      setReviews([...reviews, response.data])
    })
    .catch((error) => {
      console.log("error", error)
    }) 
  };

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
      <Column>
        <ReviewForm
          // name={name}
          review={review}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          setRating={setRating}
        />
      </Column>
    </Wrapper>
  );
};
export default Product;
