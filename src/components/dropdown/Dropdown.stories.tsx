import React from "react";

import { Dropdown } from "./Dropdown";

export default {
  title: "Atoms/Dropdown",
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const DropdownComponent = Template.bind({});

DropdownComponent.args = {
  dropdownButtonText: "Dropdown",
  menuItems: [
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

// export const DropdownError = () => {
//   return (
//     <Dropdown
//       menuItems={[
//         {
//           label: "Menu 1",
//           value: "menu1",
//         },
//         {
//           label: "Menu 2",
//           value: "menu2",
//         },
//         {
//           value: "menu3",
//         },
//       ]}
//     />
//   );
// };
