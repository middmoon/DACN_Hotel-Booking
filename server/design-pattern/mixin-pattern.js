// Define a mixin object with some methods
const myMixin = {
  sayHello() {
    console.log("Hello!");
  },
  sayGoodbye() {
    console.log("Goodbye!");
  },
};

// Define a class
class MyClass {}

// Mixin the methods from myMixin into MyClass prototype
Object.assign(MyClass.prototype, myMixin);

// Create an instance of MyClass
const obj = new MyClass();

// Call the methods from the mixin
obj.sayHello(); // Output: Hello!
obj.sayGoodbye(); // Output: Goodbye!
