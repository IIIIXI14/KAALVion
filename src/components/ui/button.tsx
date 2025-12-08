import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-[0.75rem] font-semibold uppercase tracking-[0.35em] ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border border-[rgba(236,68,59,0.65)] bg-[var(--primary)] text-[var(--primary-foreground)] shadow-[0_12px_35px_rgba(236,68,59,0.55)] hover:-translate-y-1 hover:brightness-110 hover:shadow-[0_16px_45px_rgba(255,111,100,0.62)]",
        destructive: "border border-destructive bg-destructive text-destructive-foreground hover:-translate-y-1",
        outline:
          "border border-white/25 bg-transparent text-white hover:border-[rgba(236,68,59,0.75)] hover:text-white hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(236,68,59,0.45)]",
        secondary:
          "border border-white/10 bg-white/10 text-white hover:border-[rgba(236,68,59,0.55)] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(236,68,59,0.32)]",
        ghost: "text-white/70 hover:text-white hover:-translate-y-1",
        link: "text-primary underline-offset-4 hover:underline tracking-normal",
      },
      size: {
        default: "h-12 px-8",
        sm: "h-10 px-6 text-[0.65rem]",
        lg: "h-14 px-10 text-[0.8rem]",
        icon: "h-12 w-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
