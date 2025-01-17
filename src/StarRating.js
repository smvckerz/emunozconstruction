import React from "react";

function StarRating({ rating, onRatingChange }) {
  // We'll generate an array [1,2,3,4,5], map them to star <span>
  // clicking a star sets the rating to that index
  const stars = [1, 2, 3, 4, 5];

  const handleClick = (starValue) => {
    // If user clicks starValue, call onRatingChange(starValue)
    onRatingChange(starValue);
  };

  return (
    <div>
      {stars.map((star) => {
        const isFilled = star <= rating;
        return (
          <span
            key={star}
            onClick={() => handleClick(star)}
            style={{
              cursor: "pointer",
              color: isFilled ? "gold" : "gray",
              fontSize: "1.5rem",
              marginRight: "5px",
            }}
            role="img"
            aria-label={`${star} Star`}
          >
            {isFilled ? "★" : "☆"}
          </span>
        );
      })}
      <span style={{ marginLeft: "8px" }}>{rating} / 5</span>
    </div>
  );
}

export default StarRating;
