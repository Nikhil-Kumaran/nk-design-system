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
    { label: "Adelaide", value: "adelaide" },
    { label: "Brisbane", value: "brisbane" },
    { label: "Canberra", value: "canberra" },
    { label: "Darwin", value: "darwin" },
    { label: "Hobart", value: "hobart" },
    { label: "Melbourne", value: "melbourne" },
    { label: "Perth", value: "perth" },
    { label: "Sydney", value: "sydney" },
  ],
  placeholder: "Choose a city",
};

SelectComponent.parameters = {
  design: {
    type: "figma",
    url:
      "https://www.figma.com/file/R9uy2bVCY1jQsvakf3fv23/ADG-Components-Community?node-id=2048%3A2473",
  },
};
