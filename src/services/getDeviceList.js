/**
 * GET list of devices from the server
 * @async
 * @param {String} url - Home Assistant URL
 * @param {String} token - API access token
 * @returns {Promise[Boolean, Object[] | Object]} Returns a response array
 */
export const getDeviceList = async (url, token) => {
  const endpoint = new URL("/api/states", url);
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  let hasError, data;

  try {
    const res = await fetch(endpoint, options);
    if (!res.ok) {
      const error = new Error("Error fetching devices.");
      error.status = res.status;
      throw error;
    }
    hasError = false;
    data = await res.json();
  } catch (error) {
    data = { message: error.message, ...error };
    hasError = true;
  }

  return [hasError, data];
};
