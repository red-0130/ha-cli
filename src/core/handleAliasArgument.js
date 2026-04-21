import {
  addAlias,
  getAllAlias,
  removeAlias,
  showAllAliases,
} from "@/commands/alias";
import Logger from "@/utils/logger";

export function handleAliasArgument(config, argument, alias, entityId) {
  const log = new Logger();
  switch (argument) {
    case "add":
      if (!alias) {
        log.error("No alias argument provided.");
        process.exit(1);
      }
      if (!entityId) {
        log.error("No entity_id provided.");
        process.exit(1);
      }
      addAlias(alias, entityId) && log.success("Alias has been added");
      break;

    case "remove":
      removeAlias(alias) && log.success("Alias has been removed.");
      break;

    case "show":
      const allAlias = getAllAlias(config);
      const aliases = showAllAliases(allAlias);
      console.table(aliases);
      break;

    default:
      console.log("No argument passed.");
      break;
  }
}
