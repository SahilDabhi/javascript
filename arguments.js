function sum(a, b) {
  console.log(a + b);
}
// it wont work when more than 2 arguments are passed

// sum(1, 2, 3, 4, 5);

//-----------------------------------------------------------------------------------------------------

function sub() {
  console.log(arguments);

  const arr = [...arguments];
  console.log(arr);
}

// arguments is an array like object but is not an array
// in arr we can apply all the array methods

// sub(1, 2, 3, 4, 5, 6);

//-------------------------------------------------------------------------------------------------------

function sumF() {
  let sum = 0;
  for (let value of arguments) {
    sum += value;
  }
  console.log(sum);
}

// sumF(1, 2, 3, 4, 5, 6);

//------------------------------------------------------------------------------------------------

function defaul(a = 10) {
  console.log(a);
  console.log(arguments);

  arguments[0] = 6;
  console.log(a);
  console.log(arguments);
}

// defaul(4);

// the value given to the function is taken first
// if no value given to function then default vlaue it taken

//--------------------------------------------------------------------------------------------------

function defau(a) {
  console.log(a);
  console.log(arguments);

  arguments[0] = 6;
  console.log(a);
  console.log(arguments);
}

defaul(4);

//if default value is not given so if we change value inside the function value will change everywhere
// changing the value will not affect the arguments or the parameter object
