// Define a simple class
class Coffee {
  cost() {
    return 5; // Base cost of coffee
  }
}

// Define a decorator class
class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    // Add cost of milk to the base cost of coffee
    return this.coffee.cost() + 2;
  }
}

// Define another decorator class
class SugarDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    // Add cost of sugar to the base cost of coffee
    return this.coffee.cost() + 1;
  }
}

// Create an instance of Coffee
let myCoffee = new Coffee();

// Decorate the coffee with Milk
myCoffee = new MilkDecorator(myCoffee);

// Decorate the coffee with Sugar
myCoffee = new SugarDecorator(myCoffee);

// Now, myCoffee has both Milk and Sugar
console.log("Total cost:", myCoffee.cost()); // Output: Total cost: 8
