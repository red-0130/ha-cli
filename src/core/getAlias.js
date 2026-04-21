import Logger from "@/utils/logger";

/**
 * Get the entityId of alias
 *
 * @param {{aliases: Object}} config - Config object
 * @param {String} alias - Alias to find
 * @returns {String|null} Returns the entityId or exit if it doesn't exist
 */
export function getAlias(config, alias) {
  const log = new Logger();
  const entityId = config.aliases[alias];
  if (!entityId) {
    log.error("Alias not found.");
    process.exit(1);
  }

  return entityId;
}
