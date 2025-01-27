async function doSomething() {
  try {
    let promise = new Promise((res) => res("resolved"));
    let result = await promise;
    console.log("promise done");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

const output = doSomething();
console.log(output);

//async function always returns a promise and inside the promise it contains the return value

// ----------------------------------------------------------------------------
