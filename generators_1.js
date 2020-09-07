function delayTimes(x) {
  return new Promise(resolve => {
    setTimeout(() => resolve(x * 2), 2000);
  })
};

function* count() {
  let num = yield
  num = yield delayTimes(num).then(res => console.log(res));
  num = yield delayTimes(num).then(res => console.log(res));
  num = yield delayTimes(num).then(res => console.log(res));
}

function iterator() {
  let step = 0;
  return {
    next: () => {
      step++;

      if (step === 1) {
        return { value: 'angry', done: false};
      }

      if (step === 2) {
        return { value: 'really angry', done: false};
      }

      if (step === 3) {
        return { value: 'really really angry', done: false};
      }
    }
  }
}

// const generator = count();
// generator.next();
// generator.next(2);
// generator.next(3);
// generator.next(4);

const fakeIterator = iterator();
console.log(fakeIterator.next());
console.log(fakeIterator.next());
console.log(fakeIterator.next());