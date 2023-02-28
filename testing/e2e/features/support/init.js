import detox from 'detox/internals'
import { Before, BeforeAll, AfterAll, After } from "@cucumber/cucumber";
import config from "../../../.detoxrc.json";
import adapter from "./adapter";

BeforeAll(async () => {
  await detox.init(config);
  await device.launchApp({ newInstance: true });
});

Before(async (context) => {
  await device.reloadReactNative();
  await adapter.beforeEach(context);
});

After(async (context) => {
  await adapter.afterEach(context);
});

AfterAll(async () => {
  await detox.cleanup();
});
