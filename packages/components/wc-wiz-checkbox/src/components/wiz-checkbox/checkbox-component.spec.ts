import { newSpecPage } from "@stencil/core/testing";
import { WizCheckbox } from "./checkbox-component";

describe("wiz-checkbox", () => {
  it("renders", async () => {
    const { root } = await newSpecPage({
      components: [WizCheckbox],
      html: "<wiz-checkbox></wiz-checkbox>",
    });
  });
});
