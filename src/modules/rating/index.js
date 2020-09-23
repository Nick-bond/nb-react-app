import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { MainContext } from '../provider';

const rateRange = [5, 4, 3, 2, 1];
const range = 0.1;

function Rating({ rating, id }) {
  const { ratings, onReviewUpdate } = useContext(MainContext);
  const [ratingValue, setRating] = useState(rating);

  useEffect(
    () => {
      const i = ratings.find(item => item.id === id);
      setRating((i && i.rating) || rating);
    },
    [setRating, ratings]
  );

  const updateRating = (id, newRating) => {
    let value = ratingValue;

    if (newRating < value) {
      value = Number((ratingValue - range).toFixed(1));
    } else if (newRating > value) {
      value = Number((ratingValue + range).toFixed(1));
    }

    setRating(value);
    onReviewUpdate(id, value);
  };

  return (
    <React.Fragment>
      <div className="rating">
        {rateRange.map(item => {
          const active = item <= parseInt(ratingValue, 10);
          const classActive = active ? 'active' : '';
          return (
            <span
              key={item}
              className={classActive}
              role="button"
              tabIndex="0"
              onClick={e => {
                e.preventDefault();
                updateRating(id, item);
              }}
              onKeyUp={e => {
                e.preventDefault();
                updateRating(id, item);
              }}
              onKeyDown={e => {
                e.preventDefault();
                updateRating(id, item);
              }}>
              {' '}
              &#9734;
            </span>
          );
        })}
      </div>
      <span className="rating-value">{ratingValue}</span>
    </React.Fragment>
  );
}

Rating.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Rating;
