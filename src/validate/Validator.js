import { RacingCarError } from "./RacingError.js";

const Validator = {
  validateCars(cars) {
    if (cars.some((x) => x.length > 5)) {
      throw new CustomError("자동차 이름이 깁니다.(5자 이하)");
    }

    const nameSet = new Set(cars);

    if (nameSet.size != cars.length) {
      throw new CustomError("자동차 이름이 중복입니다.");
    }
  },
  validateAttemptCount(attemptCount) {
    if ((attemptCount < 1, isNaN(attemptCount))) {
      throw new CustomError("정확한 횟수를 입력해주세요.(숫자, 양수)");
    }
  },
};

export default Validator;
