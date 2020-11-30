const getCurrentRecipe = (items, id) => {
  if (id === "12ddsrrRg") {
    return [];
  }

  return items.find(item => item.id === id);
};

export default getCurrentRecipe;
