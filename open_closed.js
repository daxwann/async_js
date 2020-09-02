function AreaCalculator(shapesArr) {
  this.shapesArr = shapesArr;
}

// code smell
AreaCalculator.prototype.smellySum = function() {
  const areasArray = this.shapes.map(shape => {
    // do we need to check the class type of each shape in this function?
    // do we need to have area calculation logic in the sum function?
    if (shape instanceof Square) {
      return Math.pow(shape.length, 2);
    }

    if (shape instanceof Circle) {
      return Math.PI + Math.pow(shape.radius, 2);
    }
  });

  return areasArray.reduce((acc, curr) => acc + curr, 0);
}

// refactored
Square.prototype.area = function() {
  return Math.pow(this.length, 2);
}

Circle.prototype.area = function() {
  return Math.PI + Math.pow(this.radius, 2);
}

AreaCalculator.prototype.cleanSum = function() {
  return this.shapes
            .map(shape => shape.area())
            .reduce((accum, curr) => accum + curr, 0);
}