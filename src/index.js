#!/usr/bin/env bun

import { getConfig } from "@/core/config";
import parseArguments from "@/utils/parseArgs";
import Logger from "@/utils/logger";

async function main() {
  const [values, positionals] = parseArguments(process.argv);
  const command = positionals[2];
  const argument = positionals[3];
  const log = new Logger();

  // Non-authenticated commands
  if (command === "help" || !command) {
    const { showHelp } = await import("@/commands/help");
    showHelp();
    return;
  }

  if (command === "alias") {
    const config = getConfig();
    const { handleAliasArgument } = await import("@/core/handleAliasArgument");
    const entityId = values.device;
    const alias = positionals[4];
    handleAliasArgument(config, argument, alias, entityId);
    return;
  }

  // Authenticated commands
  const { authenticate } = await import("@/core/authentication");
  const [authenticated, config] = await authenticate();

  if (!authenticated) {
    log.error("Authentication failed. Check your token and URL.");
    process.exit(1);
  }

  const deviceId = argument ?? values.device ?? config.aliases[values.alias];

  switch (command) {
    case "list":
      const { showDevices } = await import("@/commands/list");
      showDevices(config);
      break;

    case "show":
      if (!deviceId) {
        log.error("Device ID not provided.");
        process.exit(1);
      }
      const { showDeviceState } = await import("@/commands/show");
      await showDeviceState(config, deviceId);
      break;

    case "change":
      if (!deviceId) {
        log.error("Device ID not provided.");
        process.exit(1);
      }
      if (!values.state) {
        const { showServices } = await import("@/commands/services");
        await showServices(config, deviceId);
        process.exit(0);
      }
      const { changeState } = await import("@/commands/change");
      await changeState(config, deviceId, values.state);
      break;

    default:
      const { showHelp } = await import("@/commands/help");
      showHelp();
      break;
  }
}

main();
