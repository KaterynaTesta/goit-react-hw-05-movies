import { useState, useEffect } from "react";
import { fetchMovieReviews } from "../../services/movies-api";
import s from "./Reviews.module.css";

export default function ReviewsView({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);
  return (
    <>
      {reviews.length <= 0 ? (
        <p>There is no reviews yet</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li className={s.reviewList} key={review.id}>
              <p className={s.reviewAuthor}>Author: {review.author}</p>
              <p className={s.reviewText}>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
