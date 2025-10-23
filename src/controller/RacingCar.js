import { getRandomNumber } from "./RandomValue.js";

export function RacingCar() {
  const randomValue = getRandomNumber();
  const position = [];

  if (randomValue >= 4) {
    position.push("-");
  }
}
RacingCar();
