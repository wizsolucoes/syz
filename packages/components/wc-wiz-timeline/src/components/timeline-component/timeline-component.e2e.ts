import { newE2EPage } from "@stencil/core/testing";

describe("wiz-timeline", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<wiz-timeline></wiz-timeline>");

    const element = await page.find("wiz-timeline");
    expect(element).toHaveClass("hydrated");
  });
});
