import React, { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import './StarRating.css'; // Ensure you have the necessary CSS for styling

const StarRating = ({ initialRating = 1 }) => {
  const [selectedStar, setSelectedStar] = useState(initialRating);

  const handleSelectStar = (starIndex) => {
    setSelectedStar(starIndex);
  };

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, starIndex) => (
        <StarIcon
          key={starIndex}
          onClick={() => handleSelectStar(starIndex)}
          className={starIndex <= selectedStar ? 'select' : ''}
        />
      ))}
    </div>
  );
};

export default StarRating;
