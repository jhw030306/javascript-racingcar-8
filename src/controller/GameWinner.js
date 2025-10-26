import { RacingCarView } from "../view/RacingCarView.js";

export async function GameWinner(carNames, attemptCount) {
  const cars = await RacingCarView(carNames, attemptCount);

  const distances = cars.map((car) => car.position);

  const maxDistance = Math.max(...distances);

  const winner = cars

    .filter((car) => car.position === maxDistance)

    .map((car) => car.name);

  return winner;
}
