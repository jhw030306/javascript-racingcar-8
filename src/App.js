import {
  Console,
  Random,
} from "@woowacourse/mission-utils";
import { inputCar } from "./input/InputCar.js";
import { inputAttemptCount } from "./input/InputAttemptCount.js";
import { carsPositions } from "./model/CarsPosition.js";
// import { RacingCar } from "./controller/RacingCar.js";

class App {
  async run() {
    const carnames = await inputCar();
    const attemptCount = await inputAttemptCount();

    const carspositions = await carsPositions(carnames);
    // const racingcar = await RacingCar(carsPositions);
  }
}

export default App;
