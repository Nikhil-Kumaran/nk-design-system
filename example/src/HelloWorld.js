import React from "react";
import { Button, Select, Input } from "nk-design-system";

const HelloWorld = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <Button label="Button" />
      <br />
      <br />
      <Button label="Button" type="primary" />
      <br />
      <br />
      <Button label="Button" type="danger" />
      <br />
      <br />
      <Select
        options={[
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
        ]}
      />
      <br />
      <Input label="Name" helpText="This is required" required />
    </div>
  );
};

export default HelloWorld;
