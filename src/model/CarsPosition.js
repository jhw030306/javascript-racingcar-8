export async function carsPositions(carNames) {
  const cars = carNames.map((name) => ({
    name,
    position: [],
  }));

  return cars;
}
