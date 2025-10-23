import { Random } from "@woowacourse/mission-utils";

export function getRandomNumber() {
  const randomValue = Random.pickNumberInRange(0, 9);

  return randomValue;
}
