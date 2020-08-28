import { newSpecPage } from "@stencil/core/testing";
import { ButtonComponent } from "./button-component";

describe("wiz-button", () => {
  it("should renders the component", async () => {
    const page = await newSpecPage({
      components: [ButtonComponent],
      html: `<wiz-button></wiz-button>`,
    });

    expect(page.root).toEqualHtml(`
      <wiz-button>
        <mock:shadow-root>
          <button class="default-size medium primary square" type="button">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </wiz-button>
    `);
  });
});
