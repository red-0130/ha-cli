import { APIErrorObject } from "@/utils/ApiErrorObject";

/**
 * Checks the status of the API server
 * @async
 * @param {String} url - Server base URL
 * @param {String} token - Home Assistant access token
 * @returns {[Boolean, Object]} Returns the error status and data/error object
 * - {Boolean} hasError - Returns true if there is an error
 * - {Object} responseData - Response data or error object
 */
export async function getApiStatus(url, token) {
  const baseUrl = new URL("/api/", url);
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await fetch(baseUrl, options);
    if (!res.ok) {
      const error = new APIErrorObject("API Server Error", res);
      error.throw();
    }

    const data = await res.json();

    return [false, data];
  } catch (error) {
    const data = {
      message: error.message,
      ...error,
    };

    return [true, data];
  }
}
