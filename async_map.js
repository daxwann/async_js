Array.prototype.asyncMap = function (fn) {
  return new Promise(resolve => {
    const actions = this.map(fn);
    Promise.all(actions).then(res => resolve(res));
  });
};

function delayTimes(x) {
  return new Promise(resolve => {
    setTimeout(() => resolve(x * 2), 2000);
  })
};

[1, 2, 3, 4]
  .asyncMap(delayTimes)
  .then((response) => console.log("Test asyncMap", response))
  .catch((error) => console.error(error));

// delayTimes(4).then(res => console.log(res));