/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface WizLoading {
        "finish": string;
        "percentage": number;
        "type": string;
    }
}
declare global {
    interface HTMLWizLoadingElement extends Components.WizLoading, HTMLStencilElement {
    }
    var HTMLWizLoadingElement: {
        prototype: HTMLWizLoadingElement;
        new (): HTMLWizLoadingElement;
    };
    interface HTMLElementTagNameMap {
        "wiz-loading": HTMLWizLoadingElement;
    }
}
declare namespace LocalJSX {
    interface WizLoading {
        "finish"?: string;
        "percentage"?: number;
        "type"?: string;
    }
    interface IntrinsicElements {
        "wiz-loading": WizLoading;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "wiz-loading": LocalJSX.WizLoading & JSXBase.HTMLAttributes<HTMLWizLoadingElement>;
        }
    }
}
