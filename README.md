# ha-cli

`ha-cli` is a command-line interface tool built with [Bun](https://bun.com) for interacting with your Home Assistant instance. It allows you to quickly list devices, check their states, change device states, and manage device aliases directly from your terminal.

## Usage

```bash
HomeAssistant CLI

Usage: ha *command* [arguments] [options]
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
```

## Prerequisites

- [Bun](https://bun.com) installed on your system.
- A Home Assistant instance (and the necessary configuration/authentication setup for this tool).

## Installation

1. Install the project dependencies:
   ```bash
   bun install
   ```

2. Build the CLI binaries:

   **Option A: Install globally**
   ```bash
   bun run build:ha
   bun run build:toggle
   ```
   *Note: This will compile the executables to `~/.local/bin/ha` and `~/.local/bin/toggle`. Make sure `~/.local/bin` is in your system's `PATH`.*

   **Option B: Build locally using build script**
   ```bash
   bun run build.ts
   ```
   *Note: This compiles the executables into the `./bin` directory inside the project. You can then use the `bun link` command to link the package globally.*
