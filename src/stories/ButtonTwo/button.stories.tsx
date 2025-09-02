// Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import React from "react";

const meta = {
  title: "Example/ButtonTwo",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Button",
  },
  argTypes: {
    variant: {
      control: { type: "inline-radio" },
      options: ["primary", "secondary"],
    },
    disabled: { control: "boolean" },
    className: { control: "text" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const PrimaryDisabled: Story = {
  args: {
    variant: "primary",
    disabled: true,
  },
};

export const SecondaryDisabled: Story = {
  args: {
    variant: "secondary",
    disabled: true,
  },
};

export const AsChildLink: Story = {
  args: {
    as: "a",
    href: "/",
    children: "Anchor as Button",
  },
  render: (args) => {
    const ref = React.useRef<HTMLAnchorElement>(null);
    return (
      <div style={{ display: "flex", gap: 12 }}>
        <Button {...args} variant="primary" ref={ref} />
        <Button {...args} variant="secondary" />
      </div>
    );
  },
  parameters: {
    docs: {
      storyDescription:
        "Renders the button styles on an `<a>` via the `Slot` using `asChild`.",
    },
  },
};

export const WithCustomClassName: Story = {
  name: "With custom className",
  args: {
    className: "custom-class-name",
    children: "Custom class name",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "grid", gap: 12 }}>
      <div style={{ display: "flex", gap: 12 }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
      <div style={{ display: "flex", gap: 12 }}>
        <Button variant="primary" disabled>
          Primary (disabled)
        </Button>
        <Button variant="secondary" disabled>
          Secondary (disabled)
        </Button>
      </div>
    </div>
  ),
  parameters: {
    controls: {
      exclude: ["children", "variant", "disabled", "asChild", "className"],
    },
    docs: {
      storyDescription: "Quick gallery of all variant + disabled combinations.",
    },
  },
};
