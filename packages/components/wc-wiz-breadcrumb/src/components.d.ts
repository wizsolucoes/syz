/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface WizBreadcrumb {
        "url": string;
    }
}
declare global {
    interface HTMLWizBreadcrumbElement extends Components.WizBreadcrumb, HTMLStencilElement {
    }
    var HTMLWizBreadcrumbElement: {
        prototype: HTMLWizBreadcrumbElement;
        new (): HTMLWizBreadcrumbElement;
    };
    interface HTMLElementTagNameMap {
        "wiz-breadcrumb": HTMLWizBreadcrumbElement;
    }
}
declare namespace LocalJSX {
    interface WizBreadcrumb {
        "url"?: string;
    }
    interface IntrinsicElements {
        "wiz-breadcrumb": WizBreadcrumb;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "wiz-breadcrumb": LocalJSX.WizBreadcrumb & JSXBase.HTMLAttributes<HTMLWizBreadcrumbElement>;
        }
    }
}
