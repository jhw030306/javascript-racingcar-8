import { inputCar } from "./input/inputCar.js";
import { inputAttemptCount } from "./input/inputAttemptCount.js";
import { ResultView } from "./view/ResultView.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const carNames = await inputCar();
      const attemptCount = await inputAttemptCount();

      await ResultView(carNames, attemptCount);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
