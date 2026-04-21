import { getApiStatus } from "./src/api/getApiStatus";
import { authenticate, checkServer } from "./src/core/authentication";
import { getConfig } from "./src/core/config";

const config = getConfig();

function main() {
  const authenticated = authenticate(config.baseUrl, config.token);
  if (!authenticated) {
    console.log("Not authenticated");
    return;
  }
  console.log("You are authenticated");
}

main();
