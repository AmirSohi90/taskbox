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

type ButtonProps<T extends React.ElementType> = Omit<
  React.ComponentProps<"button">,
  "className" | "disabled"
> & {
  className?: string;
  children: React.ReactNode;
  as?: T;
} & Omit<React.ComponentProps<T>, "as" | "className" | "disabled"> &
  VariantProps<typeof button>;

export const Button = React.forwardRef<
  HTMLElement,
  ButtonProps<React.ElementType>
>(({ children, as, className, variant, disabled, ...props }) => {
  const Comp = as ?? "button";
  return (
    <Comp className={clsx(button({ variant, disabled }), className)} {...props}>
      {children}
    </Comp>
  );
});
