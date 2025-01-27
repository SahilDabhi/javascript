let promise1 = new Promise((resolve) => {
  setTimeout(() => resolve("resolve 1"), 200);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject("reject 2"), 200);
});

let promise3 = new Promise((resolve) => {
  setTimeout(() => resolve("resolve 3"), 200);
});

let promise4 = new Promise((resolve) => {
  setTimeout(() => resolve("resolve 4"), 200);
});

let arrOfPromises = [promise1, promise2, promise3, promise4];

let promise = Promise.allSettled(arrOfPromises);
promise.then((response) => console.log(response));
promise.then((response) => response.forEach((data) => console.log(data)));
