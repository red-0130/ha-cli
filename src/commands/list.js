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
    console.error(`[ERROR][LIST]: ${list.status}: ${list.message}`);
    process.exit(1);
  }

  const output = list.map((item) => item.entity_id).join("\n");
  console.log(output);
}
