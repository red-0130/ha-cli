/**
 * Fetch options creator
 *
 * @param {String} token - Access token
 * @param {String} method - HTTP method
 * @param {any} body - Body property value. Must convert to json before passing as argument.
 * @returns {Object} Fetch `options` object
 */
export const createFetchOptions = (token, method = "get", body) => {
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    method: method.toUpperCase(),
    body,
  };
};
