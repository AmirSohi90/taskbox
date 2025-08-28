import React from "react";
import {
  DialogContext,
  DialogContextValue,
  useDialogCtx,
} from "./DialogContext";
import { clsx } from "clsx";
import "./dialog.scss";

type DialogProps = {
  children?: React.ReactNode;
};

type DialogContentProps = Omit<React.ComponentProps<"dialog">, "className"> & {
  children?: React.ReactNode;
  className?: string;
};

type DialogTriggerProps = {
  children?: ({ open }: { open: () => void }) => React.ReactNode;
};

type DialogCloseProps = {
  children?: ({ close }: { close: () => void }) => React.ReactNode;
};

function Dialog({ children }: DialogProps) {
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  const open = React.useCallback(() => {
    const el = dialogRef.current;
    if (!el) return;
    if (typeof el.open === "boolean" && el.open) return;
    if ("showModal" in el) el.showModal();
  }, []);

  const close = React.useCallback(() => {
    const el = dialogRef.current;
    if (!el) return;
    if ("close" in el) el.close();
  }, []);

  const ctx = React.useMemo<DialogContextValue>(
    () => ({ dialogRef, open, close }),
    [open, close, dialogRef]
  );

  return (
    <DialogContext.Provider value={ctx}>{children}</DialogContext.Provider>
  );
}

const DialogContent = React.forwardRef<
  HTMLDialogElement | null,
  DialogContentProps
>(({ children, className }, forwardedRef) => {
  const { dialogRef } = useDialogCtx("DialogContent");

  React.useImperativeHandle(forwardedRef, () => dialogRef.current!, [
    dialogRef,
  ]);

  return (
    <dialog ref={dialogRef} className={clsx("dialog-content", className)}>
      {children}
    </dialog>
  );
});

Dialog.Content = DialogContent;
DialogContent.displayName = "Dialog.Content";

function DialogTrigger({ children }: DialogTriggerProps) {
  if (!children) return null;
  const { open } = useDialogCtx("DialogContent");
  return children({ open });
}
Dialog.Trigger = DialogTrigger;
DialogTrigger.displayName = "Dialog.Trigger";

function DialogClose({ children }: DialogCloseProps) {
  if (!children) return null;
  const { close } = useDialogCtx("DialogContent");
  return children({ close });
}
Dialog.Close = DialogClose;
DialogClose.displayName = "Dialog.Close";

export { Dialog };
export type { DialogProps, DialogContentProps, DialogTriggerProps };
