// The usage is clean
// and makes it easy to switch `TransportStrategy`s.

const commuter = new BetterCommuter();

commuter.setStrategy(new CarStrategy());
commuter.goToWork();

commuter.setStrategy(new BikeStrategy());
commuter.goToWork();
