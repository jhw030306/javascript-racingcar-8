import { RacingCarError } from "./RacingError.js";

const Validator = {
  validateCars(cars) {
    if (cars.some((x) => x.length > 5)) {
      throw new RacingCarError(
        "자동차 이름은 5자 초과입니다."
      );
    }

    const nameSet = new Set(cars);

    if (nameSet.size != cars.length) {
      throw new RacingCarError("자동차 이름이 중복입니다.");
    }

    if (cars.some((x) => x.trim() === "")) {
      throw new RacingCarError("자동차 이름이 공백입니다.");
    }

    if (cars.length === 1) {
      throw new RacingCarError(
        "경주할 자동차는 한 대 이상이어야 합니다."
      );
    }
    if (cars.some((x) => /\s/.test(x))) {
      throw new RacingCarError(
        "자동차 이름엔 공백을 포함할 수 없습니다."
      );
    }

    if (cars.some((x) => /^\d+$/.test(x))) {
      throw new RacingCarError(
        "자동차 이름은 숫자로만 구성될 수 없습니다."
      );
    }
  },
  validateAttemptCount(attemptCount) {
    if (isNaN(attemptCount)) {
      throw new RacingCarError("횟수가 숫자가 아닙니다.");
    }

    if (attemptCount.trim() === "") {
      throw new RacingCarError(
        "횟수는 공백일 수 없습니다."
      );
    }

    const count = Number(attemptCount);

    if (count < 0) {
      throw new RacingCarError("횟수가 음수입니다.");
    }

    if (count === 0) {
      throw new RacingCarError(
        "횟수는 1회 이상이어야 합니다."
      );
    }

    if (!Number.isInteger(count)) {
      throw new RacingCarError("횟수가 소수입니다.");
    }

    if (count > 1000) {
      throw new RacingCarError("횟수가 너무 큽니다.");
    }
  },
};

export default Validator;
