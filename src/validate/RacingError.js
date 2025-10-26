export class RacingError extends Error {
  constructor(message) {
    super(`[ERROR] ${message}`);
    this.name = "RacingError";
  }
}
