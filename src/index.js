#!/usr/bin/env bun

import { authenticate } from "@/core/authentication";
import { showHelp } from "@/commands/help";
import { showDevices } from "@/commands/list";
import { showDeviceState } from "@/commands/show";
import parseArguments from "@/utils/parseArgs";
import { showServices } from "@/commands/services";
import { changeState } from "@/commands/change";
import Logger from "@/utils/logger";
import { handleAliasArgument } from "@/core/handleAliasArgument";

const [authenticated, config] = authenticate();

async function main() {
  const [values, positionals] = parseArguments(process.argv);
  const command = positionals[2];
  const argument = positionals[3];
  const log = new Logger();
  const deviceId = argument ?? values.device ?? config.aliases[values.alias];

  switch (command) {
    case "help":
      showHelp();
      break;

    case "list":
      showDevices(config);
      break;

    case "show":
      if (!deviceId) {
        console.error("Device ID not provided.");
        process.exit(1);
      }
      await showDeviceState(config, deviceId);
      break;

    case "change":
      if (!deviceId) {
        log.error("Device ID not provided.");
        process.exit(1);
      }
      if (!values.state) {
        await showServices(config, deviceId);
        process.exit(0);
      }
      await changeState(config, deviceId, values.state);
      break;

    case "alias":
      const entityId = values.device;
      const alias = positionals[4];
      handleAliasArgument(config, argument, alias, entityId);
      break;

    default:
      showHelp();
      break;
  }
}

authenticated && main();
