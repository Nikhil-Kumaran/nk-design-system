import React from "react";
import { Button, Dropdown } from "nk-design-system";

const HelloWorld = () => {
  return (
    <div className="p-4">
      <Button label="Button" />
      <br />
      <br />
      <Button label="Button" type="primary" />
      <br />
      <br />
      <Button label="Button" type="danger" />
      <br />
      <br />
      <Dropdown
        menuItems={[
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
    </div>
  );
};

export default HelloWorld;
