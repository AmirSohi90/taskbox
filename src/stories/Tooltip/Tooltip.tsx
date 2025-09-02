import React from "react";
import clsx from "clsx";
import { cva, VariantProps } from "class-variance-authority";
import "./tooltip.scss";

const tooltip = cva("tooltip", {
  variants: {
    position: {
      top: "tooltip--position--top",
      bottom: "tooltip--position--bottom",
      left: "tooltip--position--left",
      right: "tooltip--position--right",
    },
  },
  defaultVariants: {
    position: "top",
  },
});

type TooltipProps = Omit<React.ComponentProps<"span">, "className"> & {
  children: React.ReactNode;
  className?: string;
} & VariantProps<typeof tooltip>;

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ children, className, position }, ref) => {
    return (
      <div className={clsx(tooltip({ position }), className)} ref={ref}>
        {children}
      </div>
    );
  }
);

export { Tooltip };
export type { TooltipProps };
