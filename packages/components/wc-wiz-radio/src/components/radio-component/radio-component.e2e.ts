import { newE2EPage } from "@stencil/core/testing";

describe("wiz-radio", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<wiz-radio></wiz-radio>");
    const element = await page.find("wiz-radio");
    expect(element).toHaveClass("hydrated");
  });
});
