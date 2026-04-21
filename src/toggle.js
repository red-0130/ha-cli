#!/usr/bin/env bun
import { getAllAlias } from "@/commands/alias";
import { changeState } from "@/commands/change";
import { getConfig } from "@/core/config";
import parseArguments from "@/utils/parseArgs";

async function toggle() {
  const config = getConfig();
  const aliases = getAllAlias(config);
  const [_, positionals] = parseArguments(process.argv);
  const argument = positionals[2];
  const device = aliases[argument] ?? argument;

  await changeState(config, device, "toggle");
}

toggle();
