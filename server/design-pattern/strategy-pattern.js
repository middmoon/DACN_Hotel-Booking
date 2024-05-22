// Define different strategies
const strategyA = {
  execute: () => {
    console.log("Executing strategy A");
  },
};

const strategyB = {
  execute: () => {
    console.log("Executing strategy B");
  },
};

const strategyC = {
  execute: () => {
    console.log("Executing strategy C");
  },
};

// Context class that utilizes the strategy
class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  // Method to change the strategy at runtime
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  // Method that delegates the work to the current strategy
  executeStrategy() {
    this.strategy.execute();
  }
}

// Example usage
const context = new Context(strategyA);

context.executeStrategy(); // Output: Executing strategy A

// Change the strategy at runtime
context.setStrategy(strategyB);
context.executeStrategy(); // Output: Executing strategy B

// Change the strategy again
context.setStrategy(strategyC);
context.executeStrategy(); // Output: Executing strategy C
