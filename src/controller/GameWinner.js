import { RacingCarView } from "../view/RacingCarView.js";

export async function GameWinner(carNames, attemptCount) {
  const cars = await RacingCarView(carNames, attemptCount);

  const distances = cars.map((car) => car.position.length);

  const maxDistance = Math.max(...distances);

  const winner = cars

    .filter((car) => car.position.length === maxDistance)

    .map((car) => car.name);

  return winner;
}
