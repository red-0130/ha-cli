export function showHelp() {
  console.log(`
omeAssistant CLI

Usage: ha command [arguments] [options]
       toggle <device_id_or_alias>

Commands:
    help                                Show this help message
    list                                Show list of devices
    show <device_id>                    Show device info
    change <device_id> --state <state>  Change device state
    alias add <alias> --device <id>     Add an alias
    alias remove <alias>                Remove an alias
    alias show                          Show all aliases

Options:
    --device  | -d                      Set device scope
    --state   | -s                      Define state
    --alias   | -a                      Define alias (only for alias command)
    --help    | -h                      Show help message
  `);
  process.exit(0);
}
