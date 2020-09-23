import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './modules/main';
import SingleRecipe from './modules/recipe/single-recipe';

export const useRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/recipe/:id" component={SingleRecipe} />
      </Switch>
    </React.Fragment>
  );
};
