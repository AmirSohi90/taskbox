import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./Dialog";

const meta = {
  title: "Example/Dialog",
  component: Dialog,
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Dialog>
        <Dialog.Trigger>
          {({ open }) => <button onClick={open}>Open me</button>}
        </Dialog.Trigger>
        <Dialog.Content>
          <div style={{ display: "flex", flexDirection: "column" }}>
            This is a dialog where the content should be dictated by the app
            <Dialog.Close>
              {({ close }) => <button onClick={close}>Close me</button>}
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog>
    );
  },
};
