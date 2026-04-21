import { APIErrorObject } from "@/utils/ApiErrorObject";
import { createFetchOptions } from "@/utils/createFetchOptions";

/**
 * Represents the state and attributes of a generic device.
 * @typedef {Object} DeviceState
 * @property {string} entity_id - The unique identifier for the device entity.
 * @property {string} state - The current state of the device (e.g., "on", "off").
 * @property {Object} attributes - Additional attributes of the device.
 * @property {string} attributes.icon - The icon associated with the device (e.g., "mdi:lightbulb").
 * @property {string} attributes.friendly_name - The user-friendly name of the device (e.g., "Bedroom Light").
 * @property {string} last_changed - The timestamp when the state was last changed.
 * @property {string} last_reported - The timestamp when the state was last reported.
 * @property {string} last_updated - The timestamp when the state was last updated.
 * @property {Object} context - Contextual information about the state change.
 * @property {string} context.id - Unique identifier for the context.
 * @property {string|null} context.parent_id - Parent context identifier, if any.
 * @property {string|null} context.user_id - Identifier of the user who triggered the change, or null if none.
 */

/**
 * Async function that returns an array containing a boolean error flag and a device state object.
 * @async
 * @returns {Promise<[Boolean, DeviceState]>} A promise that resolves to an array where:
 * - The first element is a boolean indicating whether an error occurred (`true` if there's an error, `false` otherwise).
 * - The second element is a {@link DeviceState} object representing the current state of the device.
 */
export const getDeviceState = async (url, token, deviceId) => {
  const endpoint = new URL(`api/states/${deviceId}`, url);
  const options = createFetchOptions(token);
  try {
    const res = await fetch(endpoint, options);
    if (!res.ok) {
      const error = new APIErrorObject(`Error fetching state for ${deviceId}.`);
      error.throw();
    }

    const device = await res.json();
    return [false, device];
  } catch (error) {
    return [true, { message: error.message, ...error }];
  }
};
