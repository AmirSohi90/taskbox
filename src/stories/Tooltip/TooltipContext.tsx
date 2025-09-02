import React from "react";

export type TooltipContextValue = {};

export const TooltipContext = React.createContext<TooltipContextValue | null>(
  null
);

export function useTooltipCtx(component: string) {
  const ctx = React.useContext(TooltipContext);
  if (!ctx) throw new Error(`${component} must be used within <Tooltip>`);
  return ctx;
}
