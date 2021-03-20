import React from "react";
import { withDesign } from "storybook-addon-designs";

import { Button } from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [withDesign],
};

const Template = (args) => <Button {...args} />;

export const ButtonComponent = Template.bind({});

ButtonComponent.args = {
  label: "Button",
};

ButtonComponent.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/R9uy2bVCY1jQsvakf3fv23/ADG-Components-Community?node-id=16%3A2451",
  },
};
