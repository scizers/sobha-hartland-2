import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",

        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        white: "bg-white text-gray-900 hover:bg-gray-100 font-semibold   ",
        outline: "text-white border border-white bg-background shadow-sm ",
        outlineBlack:
          "text-black border border-black bg-background shadow-sm hover:bg-black/5 transition-colors",

        green:
          "bg-greenColor text-white hover:bg-greenColor/80 font-semibold   ",
        blue: "bg-[#48c1ef] text-white hover:bg-[#48c1ef]/80 font-semibold   ",
        gold: "bg-darkGold text-white hover:bg-darkGold/80 font-semibold   ",
        black: "bg-black text-darkGold hover:bg-black/80 font-semibold   ",
      },
      size: {
        default: "h-9 px-4 lg:px-14 py-3 lg:py-6 btn",
        sm: " rounded-full px-4 py-2 btn-sm",
        lg: "h-10 rounded-full px-14 btn",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
