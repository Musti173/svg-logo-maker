const Square = require('../lib/square');

describe('Square', () => {
  describe('Render Method', () => {
    it('should render square string', () => {
      const square = new Square({
        logoName: 'Fred',
        textColour: 'red',
        bgColour: 'white',
        logoShape: 'square',
      });
      expect(square.render()).toBe(
        `<rect width="100" height="100" rx="15" fill="white" />`
      );
    });
  });
});