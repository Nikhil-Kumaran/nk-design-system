import React from "react";

import { Button } from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const ButtonComponent = Template.bind({});
ButtonComponent.args = {
  label: "Button",
};
