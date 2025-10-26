import { inputCar } from "../input/InputCar.js";
import { Console } from "@woowacourse/mission-utils";

export function carsPositions(carNames) {
  const cars = carNames.reduce((acc, name) => {
    acc[name] = 0;
    return acc;
  }, {});

  Console.print(cars);

  return cars;
}
