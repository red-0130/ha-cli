import { parseArgs } from "util";

/**
 * Parse command arguments
 *
 * @param {Array} args - Argument array from the `Bun.argv` process
 * @returns {[Object, String[]]} Returns an object with key and value, and an array of positional arguments
 */

function parseArguments(args) {
  const { values, positionals } = parseArgs({
    args,
    options: {
      help: { type: "boolean", short: "h" },
      filter: { type: "string", short: "f" },
      device: { type: "string", short: "d" },
      state: { type: "string", short: "s" },
      alias: { type: "string", short: "a" },
    },
    strict: true,
    allowPositionals: true,
  });

  return [values, positionals];
}

export default parseArguments;
