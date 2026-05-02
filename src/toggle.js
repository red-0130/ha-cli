#!/usr/bin/env bun
import { getConfig } from "@/core/config";
import parseArguments from "@/utils/parseArgs";

async function toggle() {
  const config = getConfig();
  if (!config.baseUrl || !config.token) {
    console.error("Not configured. Run 'ha' first.");
    process.exit(1);
  }

  const [_, positionals] = parseArguments(process.argv);
  const argument = positionals[2];
  if (!argument) {
    console.error("No device or alias provided.");
    process.exit(1);
  }

  const device = config.aliases?.[argument] ?? argument;

  const { changeState } = await import("@/commands/change");
  await changeState(config, device, "toggle");
}

toggle();
