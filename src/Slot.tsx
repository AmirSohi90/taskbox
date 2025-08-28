import clsx from "clsx";
import React from "react";

export function Slot({
  children,
  className,
}: React.HTMLAttributes<HTMLElement>) {
  const child = React.Children.only(children);

  if (!React.isValidElement(child)) {
    throw new Error(
      "Slot component expects a single valid React elmenet as a child"
    );
  }

  const classNames = clsx(child.props.className, className);

  return React.cloneElement(child, {
    ...child.props,
    className: classNames,
  });
}
