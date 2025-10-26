import { GameWinner } from "../controller/GameWinner.js";
import { Console } from "@woowacourse/mission-utils";

export async function ResultView() {
  const winner = await GameWinner();
  Console.print("최종 우승자 : " + winner.join(","));
}
