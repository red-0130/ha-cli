import { APIErrorObject } from "@/utils/ApiErrorObject";
import { createFetchOptions } from "@/utils/createFetchOptions";

/**
 * POST Change state of device into provided state
 * @async
 * @param {String} url - Home Assistant URL
 * @param {String} token - Access token
 * @param {String} entityId - `entity_id` of device
 * @param {String} state - New state to change into
 * @returns {Promise<[Boolean, Object[]]>} Returns an array of an error status and an array of device objects that changed during the update
 */
export const postStateChange = async (url, token, entityId, state) => {
  const [domain, _] = entityId.split(".");
  const endpoint = new URL(`/api/services/${domain}/${state}`, url);
  const body = JSON.stringify({ entity_id: entityId });
  const options = createFetchOptions(token, "post", body);
  try {
    const res = await fetch(endpoint, options);
    if (!res.ok) {
      const error = new APIErrorObject(
        "There was an error changing device state.",
        res,
      );
      throw error;
    }
    const data = await res.json();
    return [false, data];
  } catch (error) {
    return [true, error];
  }
};
