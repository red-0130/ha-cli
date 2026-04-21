import { postStateChange } from "@/services/postStateChange";
import Logger from "@/utils/logger";

export const changeState = async (config, entityId, state) => {
  const [hasError, newStates] = await postStateChange(
    config.baseUrl,
    config.token,
    entityId,
    state,
  );
  const log = new Logger();
  if (hasError) {
    log.message(`${newStates.status}: ${newStates.message}`).error();
    process.exit(1);
  }

  log.message("State successfully changes.").success();
};
