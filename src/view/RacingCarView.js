import { RacingCar } from "../controller/RacingCar.js";
import { carsPositions } from "../model/CarsPosition.js";
import { Console } from "@woowacourse/mission-utils";

export async function RacingCarView(
  carNames,
  attemptCount
) {
  const cars = carsPositions(carNames);

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
