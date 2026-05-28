import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        src?: string;
        "auto-rotate"?: string | boolean;
        "rotation-per-second"?: string;
        "camera-orbit"?: string;
        "shadow-intensity"?: string;
        "environment-image"?: string;
        loading?: string;
        ar?: string | boolean;
      };
    }
  }
}
