import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./Dialog";
import { Button } from "../Button/Button";

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
          {({ open }) => <Button onClick={open}>Open</Button>}
        </Dialog.Trigger>
        <Dialog.Content>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              This is a dialog where the content should be dictated by the app{" "}
              <Dialog.Close>
                {({ close }) => <span onClick={close}>X</span>}
              </Dialog.Close>
            </div>
            <Dialog.Close>
              {({ close }) => (
                <Button variant="secondary" onClick={close}>
                  Close me
                </Button>
              )}
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog>
    );
  },
};
