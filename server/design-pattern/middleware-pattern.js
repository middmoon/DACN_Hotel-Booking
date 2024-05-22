// Define a basic middleware class
class Middleware {
  constructor() {
    this.middlewares = [];
  }

  // Method to add middleware functions
  use(middleware) {
    this.middlewares.push(middleware);
  }

  // Method to run all middleware functions
  run(context, next) {
    let index = -1;

    const dispatch = (i) => {
      if (i <= index) {
        return Promise.reject(new Error("next() called multiple times"));
      }

      index = i;

      const middleware = this.middlewares[i];

      if (i === this.middlewares.length) {
        middleware = next;
      }

      if (!middleware) {
        return Promise.resolve();
      }

      try {
        return Promise.resolve(middleware(context, () => dispatch(i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    };

    return dispatch(0);
  }
}

// Example middleware functions
const middleware1 = async (context, next) => {
  console.log("Middleware 1");
  await next();
};

const middleware2 = async (context, next) => {
  console.log("Middleware 2");
  await next();
};

const middleware3 = async (context, next) => {
  console.log("Middleware 3");
  await next();
};

// Create an instance of Middleware
const middleware = new Middleware();

// Add middleware functions
middleware.use(middleware1);
middleware.use(middleware2);
middleware.use(middleware3);

// Define your main function
const mainFunction = async () => {
  console.log("Start");

  // Call the middleware stack
  await middleware.run({}, async () => {
    console.log("End");
  });
};

// Run the main function
mainFunction();
