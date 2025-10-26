import {
  Console,
  Random,
} from "@woowacourse/mission-utils";
import { inputCar } from "./input/InputCar.js";
import { inputAttemptCount } from "./input/InputAttemptCount.js";
// import { carsPositions } from "./model/CarsPosition.js";
// import { RacingCar } from "./controller/RacingCar.js";
import { OutputView } from "./view/RacingCarView.js";

class App {
  async run() {
    const carNames = await inputCar();
    const attemptCount = await inputAttemptCount();

    // const cars = await carsPositions(carNames);
    RacingCarView(carNames, attemptCount);
  }
}

export default App;
