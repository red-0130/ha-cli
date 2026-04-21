await Bun.build({
  entrypoints: ["./src/index.js"],
  compile: {
    outfile: "./bin/ha",
    target: "bun-linux-x64",
  },
});

await Bun.build({
  entrypoints: ["./src/toggle.js"],
  compile: {
    outfile: "./bin/toggle",
    target: "bun-linux-x64",
  },
});
