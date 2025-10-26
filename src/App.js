import { InputCar } from "./input/InputCar.js";
import { InputAttemptCount } from "./input/InputAttemptCount.js";
import { ResultView } from "./view/ResultView.js";
import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      const carNames = await InputCar();
      const attemptCount = await InputAttemptCount();

      await ResultView(carNames, attemptCount);
    } catch (error) {
      Console.print(error.message);
      throw error;
    }
  }
}

export default App;
