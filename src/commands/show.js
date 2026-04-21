import { getDeviceState } from "@/services/getDeviceState";
import { extractDeviceDomain } from "@/utils/extractDeviceDomain";
import { formatDeviceInfo } from "@/utils/formatDeviceInfo";

/**
 * Returns various device informations
 *
 * @param {Object} config - config object
 * @param {String} deviceId - `device_id` from list of devices
 * @returns  Logs device information
 */
export async function showDeviceState(config, deviceId) {
  const [hasError, deviceInfo] = await getDeviceState(
    config.baseUrl,
    config.token,
    deviceId,
  );
  if (hasError) {
    console.error(`[ERROR][API]: ${deviceInfo.status}: ${deviceInfo.message}`);
  }
  const device = {
    domain: extractDeviceDomain(deviceInfo.entity_id),
    friendly_name: deviceInfo.attributes.friendly_name,
    deviceId: deviceInfo.entity_id,
    state: deviceInfo.state,
    time: deviceInfo.last_changed,
  };
  const message = formatDeviceInfo(device);

  console.log(message);
}
