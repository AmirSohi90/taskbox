import React from "react";
import { TooltipContext, useTooltipCtx } from "./TooltipContext";
import { Slot } from "../../Slot";
import clsx from "clsx";

type TooltipProps = {
  children: React.ReactNode;
};

type TooltipTriggerProps = Omit<React.ComponentProps<"div">, "className"> & {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
};

type TooltipContentProps = Omit<React.ComponentProps<"div">, "className"> & {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
};

function Tooltip({ children }: TooltipProps) {
  return (
    <TooltipContext.Provider value={{}}>{children}</TooltipContext.Provider>
  );
}

const TooltipTrigger = React.forwardRef<
  HTMLDivElement | null,
  TooltipTriggerProps
>(({ children, className, asChild = false, ...props }, ref) => {
  useTooltipCtx("TooltipTrigger");
  const Comp = asChild ? Slot : "div";
  return (
    <Comp ref={ref} className={clsx("tooltip-trigger", className)} {...props}>
      {children}
    </Comp>
  );
});

Tooltip.Trigger = TooltipTrigger;
TooltipTrigger.displayName = "Tooltip.Trigger";

const TooltipContent = React.forwardRef<
  HTMLDivElement | null,
  TooltipContentProps
>(({ children, className, asChild = false, ...props }, ref) => {
  useTooltipCtx("TooltipContent");
  const Comp = asChild ? Slot : "div";
  return (
    <Comp ref={ref} className={clsx("tooltip-content", className)} {...props}>
      {children}
    </Comp>
  );
});

Tooltip.Content = TooltipContent;
TooltipContent.displayName = "Tooltip.Content";

export { Tooltip };
export type { TooltipProps, TooltipTriggerProps };
