/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface WizCard {
        "name": any;
        "occupation": any;
        "organization": any;
        "profileUrl": any;
    }
}
declare global {
    interface HTMLWizCardElement extends Components.WizCard, HTMLStencilElement {
    }
    var HTMLWizCardElement: {
        prototype: HTMLWizCardElement;
        new (): HTMLWizCardElement;
    };
    interface HTMLElementTagNameMap {
        "wiz-card": HTMLWizCardElement;
    }
}
declare namespace LocalJSX {
    interface WizCard {
        "name"?: any;
        "occupation"?: any;
        "organization"?: any;
        "profileUrl"?: any;
    }
    interface IntrinsicElements {
        "wiz-card": WizCard;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "wiz-card": LocalJSX.WizCard & JSXBase.HTMLAttributes<HTMLWizCardElement>;
        }
    }
}
