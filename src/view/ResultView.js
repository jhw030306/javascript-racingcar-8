import { GameWinner } from "../controller/GameWinner.js";
import { Console } from "@woowacourse/mission-utils";

export async function ResultView(carNames, attemptCount) {
  const winner = await GameWinner(carNames, attemptCount);
  Console.print("최종 우승자 : " + winner.join(","));
}
