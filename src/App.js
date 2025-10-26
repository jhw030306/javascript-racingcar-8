import { inputCar } from "./input/InputCar.js";
import { inputAttemptCount } from "./input/InputAttemptCount.js";
import { ResultView } from "./view/ResultView.js";

class App {
  async run() {
    const carNames = await inputCar();
    const attemptCount = await inputAttemptCount();

    await ResultView(carNames, attemptCount);
  }
}

export default App;
