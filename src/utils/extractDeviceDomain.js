/**
 * Extracts the device domain from entity_id
 *
 * @param {String} deviceId - entity_id of the device
 * @returns {String} Domain of the device
 */
export const extractDeviceDomain = (deviceId) => {
  const [domain, _] = deviceId.split(".");
  return domain;
};
