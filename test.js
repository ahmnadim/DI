const user = {
  name: "John Doe",
  age: 30,
};

const userProxy = new Proxy(user, {
  set(target, property, value) {
    console.log(`Setting value ${value} to ${property} of target`, target);

    if (property === "age" && typeof value !== "number") {
      throw new Error("Age must be a number");
    }
    target[property] = value;
    return true;
  },
});

userProxy.age = 5; // Throws an error
