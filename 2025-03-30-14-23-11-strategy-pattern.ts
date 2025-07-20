// Without strategy - the `if`-`else` nightmare

class Commuter {
  goToWork(transportType: string) {
    if (transportType == "car") {
      // Start car
      // Check gas
      // Navigate traffice
      // Park in garage
    } else if (transportType === "bus") {
      // Check schedule
      // Wait at stop
      // Pay fare
      // Find seat
    } else if (transportType == "bike") {
      // Check tires
      // Put on helmet
      // Lock at bike rack
      // Change clothes
    }
    // This keeps growing wtih each transport type...
  }
}

// With strategy
interface TransportStrategy {
  transport(): void;
}

class CarStrategy implements TransportStrategy {
  transport() {
    console.log("Driving to work by car");
    // Car specific logic
  }
}

class BusStrategy implements TransportStrategy {
  transport() {
    console.log("Taking the bus to work");
    // Bus specific logic
  }
}

class BikeStrategy implements TransportStrategy {
  transport() {
    console.log("Cycling to work");
    // Bike specific strategy
  }
}

// Clean usage
class BetterCommuter {
  private strategy: TransportStrategy;

  setStrategy(strategy: TransportStrategy) {
    this.strategy = strategy;
  }

  goToWork() {
    if (!this.strategy) {
      throw new Error("Transport strategy not set");
    }

    this.strategy.transport();
  }
}

// Usage
const commuter = new BetterCommuter();
commuter.setStrategy(new CarStrategy());
commuter.goToWork();

// Easy to switch strategies
commuter.setStrategy(new BikeStrategy());
commuter.goToWork();
