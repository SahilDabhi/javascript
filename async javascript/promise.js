const isRequestSuccessful = true;

const db = [
  { name: "sahil", age: 22 },
  { name: "mihir", age: 24 },
];

let promise1 = new Promise((resolve, reject) => {
  if (isRequestSuccessful) {
    resolve("resolved arguments");
  } else {
    let error = new Error("something went wrong ");
    reject(error);
  }
});

// console.log(promise);
// promise.then((response) => console.log(response));

//----------------------------------------------------------------------------------------------------

let promise2 = new Promise((resolve, reject) => {
  if (isRequestSuccessful) {
    setTimeout(() => resolve("Promise 2 resolved"), 300);
  } else {
    let error = new Error("something went wrong ");
    reject(error);
  }
});
// console.log(promise2);

// promise 2 shows pending as it has some async work to do whereas the first work didnt have any async work so it was resolved at runtime

//-------------------------------------------------------------------------------------------------------

let promise3 = new Promise((resolve, reject) => {
  if (isRequestSuccessful) {
    setTimeout(() => resolve("Promise 3 resolved"), 400);
  } else {
    let error = new Error("something went wrong ");
    reject(error.message);
  }
});
// console.log(promise3);

// promise3.catch((err) => console.log(err));

let promise4 = new Promise((resolve, reject) => {
  if (isRequestSuccessful) {
    setTimeout(() => resolve("Promise 4 resolved"), 400);
  } else {
    let error = new Error("something went wrong ");
    reject(error.message);
  }
});

//----------------------------------------------------------------------------------------------------------

let promises = [promise1, promise2, promise3, promise4];

let promise = Promise.all(promises);

// promise .all takes an array of promises and gives the result of promises in order

console.log(promise);
promise.then((res) => console.log(res)).catch((err) => console.log(err));

//when response form promise is received , we only receive the array if all thee promises are fulfilled else we receive the final error found in the promise

//----------------------------------------------------------------------------------------------
