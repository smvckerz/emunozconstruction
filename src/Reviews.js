import React, { useState, useEffect } from "react";
import StarRating from "./StarRating";
import "./Reviews.css";

function Reviews() {
  // Keep an array of all reviews in state
  const [reviews, setReviews] = useState([]);
  // Track current form inputs
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  // Handle submitting the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      text: reviewText,
      rating: rating,
      date: new Date().toLocaleString(),
    };

    try {
      // POST to your Node backend
      const response = await fetch("http://192.168.1.175:6000/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newReview),
      });
      if (!response.ok) {
        throw new Error("Failed to add review");
      }
      const createdReview = await response.json();

      // Update local state with the newly created review
      setReviews([...reviews, createdReview]);

      // Reset form
      setReviewText("");
      setRating(0);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  // Fetch existing reviews on mount
  useEffect(() => {
    fetch("http://192.168.1.175:6000/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="reviews-container">
      <h2>Write a Review</h2>
      <form onSubmit={handleSubmit} className="review-form">
        <label htmlFor="review-text">Your Review:</label>
        <textarea
          id="review-text"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          rows="4"
          cols="50"
          placeholder="Share your experience..."
          required
        />

        <StarRating rating={rating} onRatingChange={setRating} />

        <button type="submit">Submit Review</button>
      </form>

      <h3>All Reviews</h3>
      <ul className="review-list">
        {reviews.map((r, index) => (
          <li key={index} className="review-item">
            <div className="review-rating">
              {"★".repeat(r.rating) + "☆".repeat(5 - r.rating)}
            </div>
            <p className="review-text">{r.text}</p>
            <p className="review-date">{r.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;