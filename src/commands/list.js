import { getDeviceList } from "@/services/getDeviceList";

/**
 * Logs a list of devices with given optional filter
 *
 * @param {{baseUrl: String, token: String}} config - Config object
 * @returns {null} Logs a list of devices in the console
 */
export async function showDevices(config) {
  const [hasError, list] = await getDeviceList(config.baseUrl, config.token);
  if (hasError) {
    console.error(`[ERROR][LIST]: ${data.status}: ${data.message}`);
    process.exit(1);
  }

  const allDevices = list.map((item) => {
    return {
      entity_id: item.entity_id,
      state: item.state,
      friendly_name: item.attributes.friendly_name,
      id: item.context.id,
    };
  });

  allDevices.forEach((device) => {
    console.log(device.entity_id);
  });
}
