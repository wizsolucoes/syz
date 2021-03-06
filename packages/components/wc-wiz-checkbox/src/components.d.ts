/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface WizCheckbox {
        "disabled": boolean;
        "status": any;
    }
}
declare global {
    interface HTMLWizCheckboxElement extends Components.WizCheckbox, HTMLStencilElement {
    }
    var HTMLWizCheckboxElement: {
        prototype: HTMLWizCheckboxElement;
        new (): HTMLWizCheckboxElement;
    };
    interface HTMLElementTagNameMap {
        "wiz-checkbox": HTMLWizCheckboxElement;
    }
}
declare namespace LocalJSX {
    interface WizCheckbox {
        "disabled"?: boolean;
        "onReturnEvent"?: (event: CustomEvent<any>) => void;
        "status"?: any;
    }
    interface IntrinsicElements {
        "wiz-checkbox": WizCheckbox;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "wiz-checkbox": LocalJSX.WizCheckbox & JSXBase.HTMLAttributes<HTMLWizCheckboxElement>;
        }
    }
}
