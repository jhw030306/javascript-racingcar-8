import { RandomValue } from "./RandomValue.js";

export function RacingCar(cars) {
  cars.forEach((car) => {
    const randomValue = RandomValue();
    if (randomValue >= 4) {
      car.position += 1;
    }
  });
}
