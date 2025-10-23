export class RacingCarError extends Error {
  constructor(message) {
    super(`[ERROR] ${message}`);
    this.name = "RacingCarError";
  }
}
