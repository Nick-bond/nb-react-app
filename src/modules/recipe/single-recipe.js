import React, { useContext, useEffect } from 'react';
import { MainContext } from '../provider';
import { useParams } from 'react-router-dom';
import getCurrentRecipe from '../../helpers/get-current-recipe';
import convertTime from '../../helpers/convert-time';
import Rating from '../rating';

import constants from '../../constants';
const { types } = constants;

function SingleRecipe() {
  const { itemList, onReviewUpdate, ratings } = useContext(MainContext);
  const postId = useParams().id;
  const recipe = getCurrentRecipe(itemList, postId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!recipe) return null;

  const {
    image,
    name,
    headline,
    description,
    ingredients,
    calories,
    carbos,
    fats,
    proteins,
    time,
    difficulty,
    rating,
    id,
  } = recipe;
  return (
    <React.Fragment>
      <div className="image-wrapper">
        <img
          className="single-recipe-img"
          src={image}
          width="100%"
          height="100%"
          alt={name}
        />
      </div>
      <section className="single-recipe">
        <div className="description-wrapper">
          <div className="main-info">
            <div className="left-block">
              <h1 className="title">{name}</h1>
              <h4 className="headline">{headline}</h4>
            </div>
            <div className="right-block">
              <Rating
                rating={rating}
                onReviewUpdate={onReviewUpdate}
                id={id}
                ratings={ratings}
              />
            </div>
          </div>
          <div className="additional-info">
            <div className="left-block">
              <span className="description">{description}</span>
            </div>
            <div className="right-block">
              <div className="categories">
                <span className="categories-type">Total Time</span>
                <span className="categories-value">{convertTime(time)}</span>
              </div>
              <div className="categories">
                <span className="categories-type">Cooking difficulty</span>
                <span className="categories-value">{types[difficulty]}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="more-details">
          <div className="ingredients">
            <div className="categories">
              <span className="category-title">Ingredients</span>
            </div>
            {ingredients.map(item => (
              <span key={item} className="ingredient">
                {item}
              </span>
            ))}
          </div>
          <div className="nutritions">
            <div className="categories">
              <span className="category-title">Nutrition Values</span>
              <span className="category-value">/ per serving</span>
            </div>
            <div className="nutritions-inner">
              <div className="categories">
                <span className="categories-type">Calories</span>
                <span className="categories-value">{calories}</span>
              </div>

              <div className="categories">
                <span className="categories-type">Carbohydrate</span>
                <span className="categories-value">{carbos}</span>
              </div>

              <div className="categories">
                <span className="categories-type">Fat</span>
                <span className="categories-value">{fats}</span>
              </div>

              <div className="categories">
                <span className="categories-type">Protein</span>
                <span className="categories-value">{proteins}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default SingleRecipe;
