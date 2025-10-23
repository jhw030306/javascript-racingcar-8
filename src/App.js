import { Console, Random } from "@woowacourse/mission-utils";
import { inputCar } from "./input/InputCar.js";
import { inputAttemptCount } from "./input/InputAttemptCount.js";
class App {
  async run() {
    const carNames = await inputCar();
    const attemptCount = await inputAttemptCount();
  }
}

export default App;
