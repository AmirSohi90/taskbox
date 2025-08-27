import React from "react";

export type DialogContextValue = {
  open: () => void;
  close: () => void;
  dialogRef: React.RefObject<HTMLDialogElement>;
};

export const DialogContext = React.createContext<DialogContextValue | null>(
  null
);

export function useDialogCtx(component: string) {
  const ctx = React.useContext(DialogContext);
  if (!ctx) throw new Error(`${component} must be used within <Dialog>`);
  return ctx;
}
