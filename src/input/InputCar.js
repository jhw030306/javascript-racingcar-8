import { Console } from "@woowacourse/mission-utils";
import Validator from "../validate/Validator.js";

export async function InputCar() {
  const carInput = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );

  const carNames = carInput
    .split(",")
    .map((name) => name.trim());
  Validator.validateCars(carNames);
  return carNames;
}
