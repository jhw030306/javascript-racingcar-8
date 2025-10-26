import { Console } from "@woowacourse/mission-utils";
import Validator from "../validate/Validator.js";

export async function inputAttemptCount() {
  const attemptCount = await Console.readLineAsync(
    "시도할 횟수는 몇 회인가요?\n"
  );

  Validator.validateAttemptCount(attemptCount);

  return Number(attemptCount);
}
