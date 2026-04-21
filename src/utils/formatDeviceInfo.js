/**
 * Formats device info into single line readable text
 *
 * @param deviceInfo
 * @param {String} deviceInfo.domain - Device domain
 * @param {String} deviceInfo.friendly_name - User assigned name for the device
 * @param {String} deviceInfo.deviceId - entity_id
 * @param {String} deviceInfo.state - Latest state of the device
 * @param {String} deviceInfo.time - The time the device last changed
 * @returns {String} Formatted device info
 */
export const formatDeviceInfo = ({
  domain,
  friendly_name,
  deviceId,
  state,
  time,
}) => {
  return `[${time}] | STATE:${state} | ${domain.toUpperCase()}:${friendly_name} | DEVICE_ID:${deviceId}`;
};
