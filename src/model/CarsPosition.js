export function CarsPosition(carNames) {
  const cars = carNames.map((name) => ({
    name,
    position: 0,
  }));

  return cars;
}
