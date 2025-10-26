import { getRandomNumber } from "./RandomValue.js";

export function RacingCar(cars) {
  cars.forEach((car) => {
    const randomValue = getRandomNumber();
    if (randomValue >= 4) {
      car.position.push("-");
    }
  });
}
