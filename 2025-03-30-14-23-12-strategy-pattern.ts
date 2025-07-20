// With the strategy pattern

interface TransportStrategy {
  transport(): void;
}

class CarStrategy implements TransportStrategy {
  transport() {
    console.log("Driving to work by car");

    // Start car
    // Check gas
    // Navigate traffice
    // Park in garage
  }
}

class BusStrategy implements TransportStrategy {
  transport() {
    console.log("Taking the bus to work");

    // Check schedule
    // Wait at stop
    // Pay fare
    // Find seat
  }
}

class BikeStrategy implements TransportStrategy {
  transport() {
    console.log("Cycling to work");

    // Check tires
    // Put on helmet
    // Lock at bike rack
    // Change clothes
  }
}

// To enable a new transport type,
// the only thing you'd need to do is
// to write another class which implements the `TransportStrategy` interface.
