import { RacingCar } from "../controller/RacingCar.js";
import { carsPositions } from "../model/CarsPosition.js";
import { Console } from "@woowacourse/mission-utils";

export async function RacingCarView(
  carNames,
  attemptCount
) {
  const cars = await carsPositions(carNames);
  for (let i = 0; i < attemptCount; i++) {
    RacingCar(cars);

    cars.forEach((car) => {
      Console.print(
        `${car.name} : ${car.position.join("")}`
      );
    });

    Console.print("");
  }
}
