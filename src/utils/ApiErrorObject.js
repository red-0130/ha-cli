/**
 * An API Error object
 */
export class APIErrorObject {
  /**
   * Creates an error object
   *
   * @param {String} errorMessage - Description of the error
   * @param {Response} responseObject - Fetch API response object
   */
  constructor(errorMessage, responseObject) {
    this.error = new Error(errorMessage);
    this.error.name = "APIServerError";
    this.error.status = responseObject.status;
  }

  /**
   * @throws {Error} Throws an Error object
   */
  throw() {
    throw this.error;
  }
}
