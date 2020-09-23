import getCurrentRecipe from './get-current-recipe';

describe('getCurrentRecipe', () => {
  let mockedItems = [];
  beforeEach(() => {
    mockedItems = [
      {
        id: '12ui',
        test: 'test',
      },
      {
        id: '13ui',
        test: 'test1',
      },
      {
        id: '14ui',
        test: 'test1',
      },
    ];
  });
  it('should return recipe matched by id', () => {
    expect(getCurrentRecipe(mockedItems, '12ui')).toEqual(mockedItems[0]);
  });

  it('should return undefined for case when id is not matched', () => {
    expect(getCurrentRecipe(mockedItems, '10ui')).toEqual(undefined);
    expect(getCurrentRecipe([], '10ui')).toEqual(undefined);
  });
});
