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
  children?: React.ReactNode;
  onOpen?: () => void;
};

function Dialog({ children }: DialogProps) {
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  const open = React.useCallback(() => {
    const el = dialogRef.current;
    console.log({ dialogRef });
    if (!el) return;
    console.log("Hello");
    el.showModal();
  }, [dialogRef]);

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
  const { open } = useDialogCtx("DialogContent");
  return <button onClick={open}>{children}</button>;
}
Dialog.Trigger = DialogTrigger;
DialogTrigger.displayName = "Dialog.Trigger";

function DialogClose({ children }: DialogTriggerProps) {
  const { close } = useDialogCtx("DialogContent");
  return <button onClick={close}>{children}</button>;
}
Dialog.Close = DialogClose;
DialogClose.displayName = "Dialog.Close";

export { Dialog };
export type { DialogProps, DialogContentProps, DialogTriggerProps };
