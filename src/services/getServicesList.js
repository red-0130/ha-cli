import { APIErrorObject } from "@/utils/ApiErrorObject";
import { createFetchOptions } from "@/utils/createFetchOptions";

/**
 * GET List of services
 *
 * @param {String} url - Home Assistant URL
 * @param {String} token - Access token
 * @returns {Promise<[Boolean, Object[]|Error]} Returns error state and list of services
 */
export const getServicesList = async (url, token) => {
  const endpoint = new URL("/api/services", url);
  const options = createFetchOptions(token);

  try {
    const res = await fetch(endpoint, options);
    if (!res.ok) {
      const error = new APIErrorObject(
        "There was an error fetching list of services",
      );
      throw error;
    }
    const data = await res.json();
    return [false, data];
  } catch (error) {
    return [true, error];
  }
};
