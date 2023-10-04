import type { Meta, StoryObj } from "@storybook/react";

import Light from "./Light";

const meta: Meta<typeof Light> = {
  component: Light,
  title: "MyOwn/Light",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["green", "yellow", "red"],
      control: { type: "radio" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/** This is a base component that we can use to build other stories */
export const Base: Story = {
  args: {
    variant: "green",
  },
};

export const Yellow: Story = {
  args: {
    variant: "yellow",
  },
};

export const Red: Story = {
  args: {
    variant: "red",
  },
};

export const Grouped: Story = {
  render: (args) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        background: "gray",
        width: "max-content",
        padding: 5,
      }}
    >
      <Light variant="green" />
      <Light variant="yellow" />
      <Light variant="red" />
    </div>
  ),
};
