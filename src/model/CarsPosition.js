import { Console } from "@woowacourse/mission-utils";

export function carsPositions(carNames) {
  const cars = carNames.map((name) => ({
    name,
    position: 0,
  }));

  Console.print(cars);

  return cars;
}
