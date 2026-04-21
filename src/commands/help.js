export function showHelp() {
  console.log(`
HomeAssistant CLI

Usage: homeassistant [command] [options]

Commands:
    help      Show this help message
    list      Show list of devices
    show      Show device info

Options:
    --device  | -d     Set device scope
    --state   | -s     Define state
    --help    | -h     Show help message
  `);
  process.exit(0);
}
