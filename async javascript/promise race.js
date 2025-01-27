let promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("resolve 1"), 600);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("reject 2"), 300);
});

let promise3 = new Promise((resolve) => {
  setTimeout(() => resolve("resolve 3"), 400);
});

let promise4 = new Promise((resolve) => {
  setTimeout(() => resolve("resolve 4"), 200);
});

let arrOfPromises = [promise1, promise2, promise3, promise4];

let promise = Promise.race(arrOfPromises);

//race give the first promise ever to finish whether it is resolved or rejected

// console.log(promise);
// promise.then((res) => console.log(res));

// promise.any will wait for the first fulfilled promise

let promiseAny = Promise.any(arrOfPromises);
console.log(promiseAny);
