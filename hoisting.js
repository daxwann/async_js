function hoistWithVar() {
  if (true) {
    var a = 5;
  }

  console.log("a=", a);
}

function hoistWithLet() {
  if (true) {
    let a = 5;
  }

  console.log("a=", a);
}

hoistWithVar();
hoistWithLet();