import {
  Console,
  Random,
} from "@woowacourse/mission-utils";
import { inputCar } from "./input/InputCar.js";
import { inputAttemptCount } from "./input/InputAttemptCount.js";
// import { carsPositions } from "./model/CarsPosition.js";
// import { RacingCar } from "./controller/RacingCar.js";
import { RacingCarView } from "./view/RacingCarView.js";
import { GameWinner } from "./controller/GameWinner.js";

class App {
  async run() {
    const carNames = await inputCar();
    const attemptCount = await inputAttemptCount();

    // const cars = await carsPositions(carNames);
    const Racingcars = await RacingCarView(
      carNames,
      attemptCount
    );
    const winner = GameWinner(Racingcars);
  }
}

export default App;
