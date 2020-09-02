function Shape() {};
Shape.prototype.area = function() {};
Shape.prototype.volume = function() {};

function Triangle(base, height) {
  this.base = base;
  this.height = height;
};

// Triangle inherits both area and volume methods. Triangle doesn't have volume.
Triangle.prototype = Object.create(Shape.prototype);

// separate overloaded classes or interfaces
function solidShape() {};
solidShape.prototype.volume = function(){};

// remove volume method from Shape
delete Shape.prototype.volume;