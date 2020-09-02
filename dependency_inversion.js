// picture class dependent on shape class
function SmellyPicture(color, bg) {
  this.shape = new Shape();
  this.shape.setColor(color);
  this.background = bg;
}

// picture class not dependent on shape class
function cleanPicture(shape, color, bg) {
  this.shape = shape;
  shape.setColor(color);
  this.background = bg;
}