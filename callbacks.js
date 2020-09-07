// function intersection(...arrays) {
//   return arrays.reduce((acc, array) => {
//     console.log(acc);
//     return array.filter((item) => acc.includes(item));
//   });
// }

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));

// function pipe(arrOfFuncs, value) {
//   return arrOfFuncs.reduce((accum, fn) => {
//     console.log('fn(accum)=', fn(accum));
//     return fn(accum) || fn(value);
//   }, "");
// }

// const capitalize = (str) => str.toUpperCase();
// const addLowerCase = (str) => str + str.toLowerCase();
// const repeat = (str) => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, "cat"));

// let obj = {
//   a: 1,
//   b: 2,
//   c: 3
// }

// for (let x in obj) {
//   console.log(x)
// }

// for (let [key, value] of Object.entries(obj)) {
//   console.log(key, value);
// }

// function display(data) {
//   console.log(data);
// }
// function printHello() {
//   console.log("Hello");
// }
// function blockForLong() {
//   const arr = [];
//   for (let i = 0; i < 100000; i++) {
//     arr.push(i);
//   }
//   console.log('hello');
// }
// setTimeout(printHello, 0);
// // const futureData = fetch(
// //   "https://twitter.com/AmeriRyan/status/1291935897076641792"
// // );
// // futureData.then(display);
// blockForLong();
// console.log("Me first!");

// function limitedRepeat() {
//   function printHi() {
//     console.log("hi again");
//   }
//   function clear() {
//     console.log(id);
//     clearInterval(id);
//   }
//   printHi();
//   const id = setInterval(printHi, 1000);
//   setTimeout(clear, 5000);
// }

// limitedRepeat();

// let personStore = {
//   greet() {
//     console.log("hello");
//   }
// }

// let person = Object.create(personStore);

// person.greet();

// function Test() {
//   this.name = 'name'
//   this.f = function() {
//     setTimeout(() => console.log(this.name))
//   }

//   this.z = function() {
//     setTimeout(function() {
//       console.log(this.name)
//     });
//   }
// }

// const test1 = new Test();
// test1.f();
// test1.z();

const test = {
  x: 42,
  getX: function() {
    return this.x;
  }
};

let func = test.getX;
let func2 = func.bind(test);

console.log(func2());