describe('Dots', function() {

  var mainDot;

  beforeEach(function() {
     mainDot = new Dot(0, 0, 10);
  });

  describe('calcDistFrom', function() {

    it('should return 10 from (0, 0) to (0, 10)', function() {
      var dot10Away = new Dot(0, 10, 1000);
      expect(dot10Away.calcDistFrom(mainDot)).toBe(10);
    });

    it('should return 5 from (0, 0) to (3, 4)', function() {
      var dot10Away = new Dot(3, 4, 1000);
      expect(dot10Away.calcDistFrom(mainDot)).toBe(5);
    });
  })

  describe('isTouching()', function() {

    it('should be true when they are touching', function() {
      var touchingDot = new Dot(20, 0, 11);
      expect(touchingDot.isTouching(mainDot)).toBe(true);
    });

    it('should be false when they are not touching', function() {
      var spacedDot = new Dot(20, 0, 9);
      expect(spacedDot.isTouching(mainDot)).toBe(false);
    });

  });

})
