import { Component, ComponentInterface, h, Prop } from "@stencil/core";
import { CssClassMap } from "../../models/interface";

@Component({
  tag: "wiz-button",
  styleUrl: "button-component.scss",
  shadow: true,
})
export class ButtonComponent implements ComponentInterface {
  @Prop({ reflect: true })
  disabled: boolean;

  @Prop()
  type: "button" | "reset" | "submit" = "button";

  @Prop()
  color: "primary" | "secundary" = "primary";

  @Prop()
  shape: "square" | "round" = "square";

  @Prop()
  size: "small" | "medium" | "large" = "medium";

  @Prop()
  responsive: "full-width" | "default-size" = "default-size";

  private getCssClassMap(): CssClassMap {
    return {
      [this.color]: true,
      [this.shape]: true,
      [this.size]: true,
      [this.responsive]: true,
    };
  }

  render() {
    const classMap = this.getCssClassMap();

    return (
      <button type={this.type} class={classMap} disabled={this.disabled}>
        <slot />
      </button>
    );
  }
}
