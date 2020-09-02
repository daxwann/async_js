function Rectangle(height, width) {
  this.height = height;
  this.width = width;
}

Rectangle.prototype.area = function() {
  return this.height * this.width;
}

function Square(height) {
  Rectangle.call(this, height, height);
}

Square.prototype = Object.create(Rectangle.prototype);

const square = new Square(5);
console.log('square area: ', square.area()); // 25

function AwesomeRectangle(height, width) {
  Square.call(this, height, width);
}

AwesomeRectangle.prototype = Object.create(Square.prototype);

const awesomeRectangle = new AwesomeRectangle(3, 4);
console.log('awesomeRectangle area: ', awesomeRectangle.area()); // 9