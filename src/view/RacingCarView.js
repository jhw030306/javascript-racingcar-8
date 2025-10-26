import { RacingCar } from "../controller/RacingCar.js";
import { CarsPosition } from "../model/CarsPosition.js";
import { Console } from "@woowacourse/mission-utils";

export function RacingCarView(carNames, attemptCount) {
  const cars = CarsPosition(carNames);

  Console.print("\n실행 결과");
  for (let i = 0; i < attemptCount; i++) {
    RacingCar(cars);

    cars.forEach((car) => {
      Console.print(
        `${car.name} : ${"-".repeat(car.position)}`
      );
    });

    Console.print("");
  }

  return cars;
}
