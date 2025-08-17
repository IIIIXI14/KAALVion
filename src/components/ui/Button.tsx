"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 disabled:opacity-50 disabled:cursor-not-allowed",
	{
		variants: {
			variant: {
				primary: "bg-white text-black hover:bg-neutral-200",
				secondary: "border border-white/20 text-white hover:bg-white/10",
				ghost: "text-white hover:bg-white/10",
			},
			size: {
				sm: "h-9 px-4",
				md: "h-10 px-5",
				lg: "h-12 px-6",
			},
		},
		defaultVariants: {
			variant: "primary",
			size: "md",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, ...props }, ref) => {
		return (
			<button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
		);
	}
);
Button.displayName = "Button";

export { buttonVariants };
