class BetterCommuter {
  private transportStrategy: TransportStrategy;

  setStrategy(transportStrategy: TransportStrategy) {
    this.transportStrategy = transportStrategy;
  }

  goToWork() {
    if (!this.transportStrategy) {
      throw new Error("transportStrategy is not set");
    }

    this.transportStrategy.transport();
  }
}
