import React from 'react';
import PropTypes from 'prop-types';
import convertTime from '../../helpers/convert-time';
import { Link } from 'react-router-dom';
import Rating from '../rating';

function ThumbRecipe({ recipe }) {
  const { thumb, headline, name, calories, time, id, rating } = recipe;

  return (
    <Link to={`/recipe/${id}`} className="thumb">
      <img src={thumb} alt="" />
      <div className="rating-wrap">
        <Rating id={id} rating={rating} />
      </div>
      <div className="description">
        <span className="description-title">{name}</span>
        <span className="description-headline">{headline}</span>
        <div className="description-additional">
          <span>{calories}</span>
          <span>{convertTime(time)}</span>
        </div>
      </div>
    </Link>
  );
}

ThumbRecipe.propTypes = {
  recipe: PropTypes.shape().isRequired,
  ratings: PropTypes.shape().isRequired,
};

export default ThumbRecipe;
