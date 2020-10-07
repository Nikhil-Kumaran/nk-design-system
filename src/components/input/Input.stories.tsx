import React from "react";

import { Input } from "./Input";

export default {
  title: "Atoms/Input",
  argTypes: { onBlur: { action: "Blur" } },
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const InputComponent = Template.bind({});
InputComponent.args = {
  type: "number",
  required: true,
  label: "Number field",
};
