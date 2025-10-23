// import { Console, Random } from "@woowacourse/mission-utils";
import { inputName } from "./input/inputName.js";
import { inputNumber } from "./input/inputAttemptCount.js";
class App {
  async run() {
    const carNames = await inputName();
    const attemptCount = await inputNumber();
  }
}

export default App;
