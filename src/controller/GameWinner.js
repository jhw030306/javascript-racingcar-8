// import { RacingCarView } from "../view/RacingCarView.js";
import { Console } from "@woowacourse/mission-utils";

export function GameWinner(Racingcars) {
  const distances = Racingcars.map(
    (car) => car.position.length
  );

  const maxDistance = Math.max(...distances);
  const winner = Racingcars.filter(
    (car) => car.position.length === maxDistance
  ).map((car) => car.name);
}
