import React from "react";
import { withDesign } from "storybook-addon-designs";

import { Select } from "./Select";

export default {
  title: "Atoms/Select",
  component: Select,
  decorators: [withDesign],
};

const Template = (args) => <Select {...args} />;

export const SelectComponent = Template.bind({});

SelectComponent.args = {
  options: [
    {
      label: "Menu 1",
      value: "menu1",
    },
    {
      label: "Menu 2",
      value: "menu2",
    },
    {
      label: "Menu 3",
      value: "menu3",
    },
  ],
};

SelectComponent.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/R9uy2bVCY1jQsvakf3fv23/ADG-Components-Community?node-id=2048%3A2473",
  },
};
