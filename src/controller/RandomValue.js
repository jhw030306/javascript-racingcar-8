import { Random } from "@woowacourse/mission-utils";

export function RandomValue() {
  const randomValue = Random.pickNumberInRange(0, 9);

  return randomValue;
}
