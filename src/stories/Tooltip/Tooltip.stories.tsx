import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Example/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    controls: { expanded: true },
  },
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  args: {
    position: "top",
    children: "Tooltip",
  },
};

export const Bottom: Story = {
  args: {
    position: "bottom",
    children: "Tooltip",
  },
};

export const Left: Story = {
  args: {
    position: "left",
    children: "Tooltip",
  },
};

export const Right: Story = {
  args: {
    position: "right",
    children: (
      <>
        <p>Content</p>
        <p>Content 2</p>
      </>
    ),
  },
};
