import { getApiStatus } from "@/services/getApiStatus";
import { getConfig, setBaseUrl, setToken } from "@/core/config";

export function askForToken() {
  return prompt("Access Token:");
}

function askForBaseURL() {
  return prompt("Home Assistant Server URL:");
}

/**
 * Check status of API server
 *
 * @param {String} url - Home Assistant URL
 * @param {String} token - Access token for API
 * @returns {Boolean} Returns `true` if can connect to server
 */
export function checkServer(url, token) {
  const response = getApiStatus(url, token);
  const hasError = response[0];
  if (!hasError) {
    return true;
  }
  return false;
}

/**
 * @typedef {Object} Config
 * @property {String} baseUrl - URL of the server
 * @property {String} token - Access Token to use the API
 */
/**
 * Check API authentication
 * @returns {Promise<[Boolean, Config]>} Returns status of authentication
 */
export function authenticate() {
  const config = getConfig();
  if (!config.baseUrl || !config.token) {
    const baseUrl = askForBaseURL();
    const inputToken = askForToken();

    setBaseUrl(baseUrl);
    setToken(inputToken);
    return;
  }

  return [checkServer(config.baseUrl, config.token), config];
}
