import { RacingCarView } from "../view/RacingCarView.js";
// import { Console } from "@woowacourse/mission-utils";

export async function GameWinner() {
  const cars = await RacingCarView();
  const distances = cars.map((car) => car.position.length);

  const maxDistance = Math.max(...distances);
  const winner = cars
    .filter((car) => car.position.length === maxDistance)
    .map((car) => car.name);

  return winner;
}
