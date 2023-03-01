/* eslint-env detox/detox */
import { element, expect } from "detox";
import { Given, When, Then } from "@cucumber/cucumber";
import { DEFAULT_TIMEOUT } from "../constants";
Given("I launched the app", async () => {
  // do nothing
});

Given("I am on the landing page", async () => {
  await waitFor(element(by.id("landing-page")))
    .toBeVisible()
    .withTimeout(10000);
});
Given("I am on the login page", async () => {
  await waitFor(element(by.id("landing-page")))
    .toBeVisible()
    .withTimeout(10000);
  await element(by.id("login-button")).tap();
  await waitFor(element(by.id("login-screen")))
    .toBeVisible()
    .withTimeout(10000);
});
Given("I am on sign up screen", async () => {
  await waitFor(element(by.id("landing-page")))
    .toBeVisible()
    .withTimeout(10000);
  await element(by.id("signUp-button")).tap();
  await waitFor(element(by.id("signUp-screen")))
    .toBeVisible()
    .withTimeout(10000);;
});

When("I tap on the {string} component", async (componentId) => {
  await element(by.id(componentId)).tap();
});

When("I type {string} into {string} component", async (value, componentId) => {
  await element(by.id(componentId)).typeText(value);
  await device.pressBack();
});
Then("I see the {string} component", async (componentId) => {
  await expect(element(by.id(componentId))).toBeVisible();
});
Then(
  "I see the text {string} with value {string}",
  async (componentId, value) => {
    await expect(element(by.id(componentId))).toHaveText(value);
  }
);
Then("I should be on the {string}", async (componentId) => {
  await waitFor(element(by.id(componentId)))
    .toBeVisible()
    .withTimeout(10000);
});

Then('I should see list of {string}', async componentId => {
  await waitFor(element(by.id(componentId)).atIndex(0))
    .toBeVisible()
    .withTimeout(DEFAULT_TIMEOUT);
});

Then('I should not see list of {string}', async componentId => {
  await expect(element(by.id(componentId)).atIndex(0)).toBeNotVisible();
});

Then('I should see a list of {int} {string}', async (count, componentId) => {
  for (let i = 0; i < count; i++) {
    await waitFor(element(by.id(componentId)).atIndex(i))
      .toBeVisible()
      .withTimeout(DEFAULT_TIMEOUT);
  }
});