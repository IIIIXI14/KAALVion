import type { HTMLAttributes } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": HTMLAttributes<HTMLElement> & {
        url?: string;
      };
    }
  }
}

export {};

