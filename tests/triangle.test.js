const Triangle = require('../lib/triangle');

describe('Triangle', () => {
  describe('Render Method', () => {
    it('should return triangle string', () => {
      const triangle = new Triangle({
        logoName: 'Jake',
        textColour: 'purple',
        bgColour: 'yellow',
        logoShape: 'triangle',
      });
      expect(triangle.render()).toBe(
        `<polygon points="100 0, 0 ,0 50, 100" fill="yellow" />`
      );
    });
  });
});