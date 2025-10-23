import { Console, Random } from "@woowacourse/mission-utils";

class errorHandler extends Error {
  constructor(message) {
    super(`[ERROR] ${message}`);
    this.name = "StringCalculatorError";
  }
}

async function inputName() {
  const carInput = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n"
  );

  const carName = carInput.split(",");
  const cars = carName.map((name) => name.trim());

  if (cars.some((x) => x.length > 5)) {
    throw new errorHandler("자동차 이름이 깁니다.(5자 이하)");
  }

  const set = new Set(cars);

  if (set.size != cars.length) {
    throw new errorHandler("자동차 이름이 중복입니다.");
  }
}

async function inputNumber() {
  const numberInput = await Console.readLineAsync(
    "시도할 횟수는 몇 회인가요?\n"
  );

  if (numberInput < 1 || !!Number(numberInput)) {
    throw new errorHandler("정확한 횟수를 입력해주세요.(숫자, 양수)");
  }
  Console.print(numberInput);
}

class App {
  async run() {
    const cars = await inputName();
    const numberinput = await inputNumber();
  }
}

export default App;
