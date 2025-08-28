import clsx from "clsx";
import React from "react";
import { Slot } from "../../Slot";
import { cva, VariantProps } from "class-variance-authority";
import "./button.scss";

const button = cva("button", {
  variants: {
    variant: {
      primary: "button--primary",
      secondary: "button--secondary",
    },
    disabled: {
      true: "button--disabled",
      false: null,
    },
  },
  defaultVariants: {
    variant: "primary",
    disabled: false,
  },
});

type ButtonProps = Omit<
  React.ComponentProps<"button">,
  "className" | "disabled"
> & {
  className?: string;
  children: React.ReactNode;
  asChild?: boolean;
} & VariantProps<typeof button>;

export function Button({
  children,
  asChild,
  className,
  variant,
  disabled,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={clsx(button({ variant, disabled }), className)} {...props}>
      {children}
    </Comp>
  );
}
