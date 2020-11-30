import connectedStore from './connected-store';

describe('connectedStore', () => {
  afterEach(() => {
    connectedStore.set(undefined);
  });

  describe('#get', () => {
    it('should return connected store instance', () => {
      const test = { a: true };

      connectedStore.set(test);

      expect(connectedStore.get()).toEqual(test);
    });
  });

  describe('#applySelector', () => {
    it('should return selected value from state', () => {
      const currentState = {
        test: true,
      };

      const store = {
        getState() {
          return currentState;
        },
      };

      connectedStore.set(store);

      expect(connectedStore.applySelector(state => state.test)).toBe(true);
    });
  });
});
