import React from "react";

import { Select } from "./Select";

export default {
  title: "Atoms/Select",
  component: Select,
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
