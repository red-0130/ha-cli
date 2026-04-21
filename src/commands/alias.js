import { deleteAlias, setAlias } from "@/core/config";

export function addAlias(alias, entityId) {
  setAlias(alias, entityId);
  return true;
}

export function removeAlias(alias) {
  deleteAlias(alias);
  return true;
}

/**
 * Get aliases from config
 *
 * @param {Object} config - Config object
 * @returns {Object} Returns alias object of `{aliasName: entityId}`
 */
export function getAllAlias(config) {
  return config.aliases;
}

/**
 * Return an array of alias objects
 *
 * @param {Object} allAliases - Alias object
 * @returns {[{ALIAS: String, ENTITY_ID: String}]} Array of alias objects
 */
export function showAllAliases(allAliases) {
  const listOfAliases = [];
  for (let alias in allAliases) {
    listOfAliases.push({ ALIAS: alias, ENTITY_ID: allAliases[alias] });
  }

  return listOfAliases;
}
