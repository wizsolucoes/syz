/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface WizAlert {
        "btnclose": string;
        "time": number;
        "type": string;
    }
}
declare global {
    interface HTMLWizAlertElement extends Components.WizAlert, HTMLStencilElement {
    }
    var HTMLWizAlertElement: {
        prototype: HTMLWizAlertElement;
        new (): HTMLWizAlertElement;
    };
    interface HTMLElementTagNameMap {
        "wiz-alert": HTMLWizAlertElement;
    }
}
declare namespace LocalJSX {
    interface WizAlert {
        "btnclose"?: string;
        "time"?: number;
        "type"?: string;
    }
    interface IntrinsicElements {
        "wiz-alert": WizAlert;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "wiz-alert": LocalJSX.WizAlert & JSXBase.HTMLAttributes<HTMLWizAlertElement>;
        }
    }
}
