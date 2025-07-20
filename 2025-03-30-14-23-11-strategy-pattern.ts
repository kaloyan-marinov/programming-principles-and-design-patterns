// Without using the strategy pattern,
// an `if`-`else` hell might transpire.

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
    // This keeps growing with each transport type...
  }
}
