import React from "react";
import { Button } from "nk-design-system";

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
    </div>
  );
};

export default HelloWorld;
