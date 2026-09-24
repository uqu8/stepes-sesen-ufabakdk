import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../utils"; // Relative path pointing directly to your src/utils.js

const Button = React.forwardRef(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center gap-8px whitespace-nowrap rounded-6px text-14px font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 cursor-pointer bg-[#1e40af] text-white shadow hover:bg-[#1d4ed8] px-16px py-8px",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
