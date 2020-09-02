function Circle(radius) {
  this.radius = radius;
}

function Square(length) {
  this.length = length;
}

function AreaCalculator(shapes) {
  this.shapes = shapes;
}

AreaCalculator.prototype.sum = function() {
  // some sum function
}

// code smell
AreaCalculator.prototype.output = function() {
  return 'The sum of all shapes is ' + this.sum();
}

// create new class that handles output
function CalculatorOutput(area) {
  this.area = area;
}

CalculatorOutput.prototype.output = function() {
  return 'The sum of all shapes is ' + this.area.sum();
}