let connectedStore;

const set = store => {
  connectedStore = store;
};

const get = () => connectedStore;

const applySelector = selector => {
  const state = connectedStore.getState();

  return selector(state);
};

export default {
  set,
  get,
  applySelector,
};
