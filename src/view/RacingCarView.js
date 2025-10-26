import { RacingCar } from "../controller/RacingCar.js";
import { inputAttemptCount } from "../input/InputAttemptCount.js";
import { inputCar } from "../input/InputCar.js";
import { carsPositions } from "../model/CarsPosition.js";
import { Console } from "@woowacourse/mission-utils";

export async function RacingCarView(
  carNames,
  attemptCount
) {
  const cars = await carsPositions(carNames);

  Console.print("");
  Console.print("실행 결과");
  for (let i = 0; i < attemptCount; i++) {
    RacingCar(cars);

    cars.forEach((car) => {
      Console.print(
        `${car.name} : ${car.position.join("")}`
      );
    });

    Console.print("");
  }

  return cars;
}
