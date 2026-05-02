import { getApiStatus } from "@/services/getApiStatus";
import {
  getConfig,
  initAliases,
  setAlias,
  setBaseUrl,
  setToken,
} from "@/core/config";

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
 * @returns {Promise<Boolean>} Returns `true` if can connect to server
 */
export async function checkServer(url, token) {
  const response = await getApiStatus(url, token);
  const hasError = response[0];
  if (!hasError) {
    return true;
  }
  return false;
}

/**
 * Check API authentication
 * @returns {Promise<[Boolean, Config]>} Returns status of authentication
 */
export async function authenticate() {
  const config = getConfig();
  if (!config.baseUrl || !config.token) {
    const baseUrl = askForBaseURL();
    const inputToken = askForToken();

    setBaseUrl(baseUrl);
    setToken(inputToken);
    initAliases();
    
    // Verify only on first setup
    const isAuthenticated = await checkServer(baseUrl, inputToken);
    return [isAuthenticated, getConfig()];
  }

  // Skip server check for speed. Services will handle errors if token expired.
  return [true, config];
}
