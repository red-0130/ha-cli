import Conf from "conf";

const config = new Conf({
  projectName: "homeassistant-cli",
  projectSuffix: "",
});

export function getConfig() {
  return config.store;
}

export function setToken(token) {
  config.set("token", token);
}

export function setBaseUrl(url) {
  config.set("baseUrl", url);
}

export function setAlias(alias, entityId) {
  const aliases = config.get("aliases");
  config.set("aliases", { [alias]: entityId, ...aliases });
}

export function deleteAlias(alias) {
  const aliases = config.get("aliases");
  delete aliases[alias];
  config.set("aliases", aliases);
}

export function initAliases() {
  config.set("aliases", {});
}
