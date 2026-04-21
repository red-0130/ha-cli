import { getServicesList } from "@/services/getServicesList";
import Logger from "@/utils/logger";

export const showServices = async (config, entityId) => {
  const [hasError, serviceList] = await getServicesList(
    config.baseUrl,
    config.token,
  );
  if (hasError) {
    const log = new Logger(`${serviceList.status}: ${serviceList.message}`);
    log.error();
    process.exit(1);
  }
  const [domain, _] = entityId.split(".");
  const services = {};
  await serviceList.forEach((item) => {
    services[item.domain] = Object.keys(item.services);
  });
  services[domain].forEach((service) => {
    console.log(service);
  });
};
