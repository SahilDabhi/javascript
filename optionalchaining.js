const user = {
  name: "sahil",
  age: 22,
  address: {
    city: "bhavnagar",
    state: "gujarat",
  },
  likes: "coding",
};

// will give error as the address itself is not defined

// solution 1

if (user.address !== undefined) {
  console.log(user.address.city);
} else {
  console.log("Address not found");
}

// solution 2

console.log(user.address?.city);
