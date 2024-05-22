// Define a target object
const target = {
  message: "Hello, world!",
  getValue: function () {
    return this.message;
  },
};

// Create a proxy for the target object
const proxy = new Proxy(target, {
  // Define a handler object with traps for different operations
  get: function (target, property) {
    console.log(`Getting property "${property}"`);
    return target[property];
  },
  set: function (target, property, value) {
    console.log(`Setting property "${property}" to "${value}"`);
    target[property] = value;
    return true;
  },
  apply: function (target, thisArg, argumentsList) {
    console.log(`Calling method "${thisArg.name}"`);
    return target.apply(thisArg, argumentsList);
  },
});

// Accessing properties through the proxy
console.log(proxy.message); // Output: Getting property "message"
proxy.message = "Hello, Proxy!";
console.log(proxy.message); // Output: Getting property "message"
console.log(proxy.getValue()); // Output: Calling method "getValue"

// Modifying behavior of methods through the proxy
target.getValue = function () {
  return "Original method modified!";
};
console.log(proxy.getValue()); // Output: Calling method "getValue" with modified behavior
