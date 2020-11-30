import validUrl from './is-valid-url';

describe('validUrl', () => {
  describe('when value is url', () => {
    it('should return `true`', () => {
      expect(isValidUrl('https://test.com')).toBe(true);
    });
  });

  describe('when value is not url', () => {
    it('should return `true`', () => {
      expect(isValidUrl('test')).toBe(false);
    });
  });
});
