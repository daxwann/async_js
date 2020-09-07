// functions runs until completion. Cannot return multiple results

function sayHi() {
  return "hi";
}

const result = sayHi();
console.log(result);

function* sayHiGenerator() {
  console.log("hh");
  yield "hello";
  yield "hi";
  return "nihao";
}

const resultGenerator = sayHiGenerator();
console.log(resultGenerator.next());
console.log(resultGenerator.next());
console.log(resultGenerator.next());

const resultGenerator2 = sayHiGenerator();

// for loop
for (const iterator of resultGenerator2) {
  console.log(iterator);
}

function* newGenerator() {
  yield 'something'
  const final = yield 'give me value'
  console.log(final);
  yield 'block'
  return final
}

const newGenerator3 = newGenerator();
console.log(newGenerator3.next());
console.log(newGenerator3.next());
console.log(newGenerator3.next(5));
