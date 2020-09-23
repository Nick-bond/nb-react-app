const getCurrentRecipe = (items, id) => {
  return items.find(item => item.id === id);
};

export default getCurrentRecipe;
