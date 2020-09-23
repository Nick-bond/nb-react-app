import React, { useContext } from 'react';
import ThumbRecipe from '../recipe/thumb-recipe';
import { MainContext } from '../provider';
const Index = () => {
  const { itemList } = useContext(MainContext);
  return (
    <div className="main-content">
      <div className="main-title">
        <h1>Most Popular Recipes</h1>
        <span>
          Check out some of our most popular recipes you can enjoy time and time
          again. After all, our discerning eaters consider these their favorite
          meals and labeled them as certified delicious!
        </span>
      </div>
      <div className="thumb-wrapper">
        {itemList.map(recipe => (
          <ThumbRecipe recipe={recipe} key={recipe.id} />
        ))}
      </div>
    </div>
  );
};

export default Index;
