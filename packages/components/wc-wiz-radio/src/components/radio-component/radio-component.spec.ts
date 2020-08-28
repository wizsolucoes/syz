import { newSpecPage } from "@stencil/core/testing";
import { RadioComponent } from "./radio-component";

describe("wiz-radio", () => {
  it("renders", async () => {
    const { root } = await newSpecPage({
      components: [RadioComponent],
      html: "<wiz-radio></wiz-radio>",
    });
  });

  it("not null", () => {
    const component = new RadioComponent();

    expect(component.name).not.toBeNull();
    expect(component.value).not.toBeNull();
    component.toggle("component.value");
  });
});
