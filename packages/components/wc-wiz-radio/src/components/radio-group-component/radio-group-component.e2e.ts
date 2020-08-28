import { newE2EPage } from "@stencil/core/testing";

describe("radio-group-component", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<radio-group-component></radio-group-component>");

    const element = await page.find("radio-group-component");
    expect(element).toBeTruthy();
  });
});
