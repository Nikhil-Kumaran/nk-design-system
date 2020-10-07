import React, { useState, useRef, useEffect } from "react";

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (
        e.indexOf(p[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(s, p[i])
      )
        t[p[i]] = s[p[i]];
    }
  return t;
}

function createCommonjsModule(fn, basedir, module) {
  return (
    (module = {
      path: basedir,
      exports: {},
      require: function (path, base) {
        return commonjsRequire(
          path,
          base === undefined || base === null ? module.path : base
        );
      },
    }),
    fn(module, module.exports),
    module.exports
  );
}

function commonjsRequire() {
  throw new Error(
    "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
  );
}

var classnames = createCommonjsModule(function (module) {
  /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
  /* global define */

  (function () {
    var hasOwn = {}.hasOwnProperty;

    function classNames() {
      var classes = [];

      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) continue;

        var argType = typeof arg;

        if (argType === "string" || argType === "number") {
          classes.push(arg);
        } else if (Array.isArray(arg) && arg.length) {
          var inner = classNames.apply(null, arg);
          if (inner) {
            classes.push(inner);
          }
        } else if (argType === "object") {
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }

      return classes.join(" ");
    }

    if (module.exports) {
      classNames.default = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
});

const Button = (_a) => {
  var { type = "normal", backgroundColor, label, disabled, onClick } = _a,
    props = __rest(_a, [
      "type",
      "backgroundColor",
      "label",
      "disabled",
      "onClick",
    ]);
  const buttonClasses = classnames({
    "px-3 leading-8 rounded transition-all duration-200": true,
    "bg-gray-200 hover:bg-gray-300": type === "normal" && !disabled,
    "bg-blue-600 hover:bg-blue-500 text-white": type === "primary" && !disabled,
    "bg-transparent hover:bg-gray-200": type === "subtle" && !disabled,
    "bg-red-600 hover:bg-red-500 text-white": type === "danger" && !disabled,
    "bg-yellow-600 hover:bg-yellow-500": type === "warning" && !disabled,
    "cursor-not-allowed bg-gray-200 text-black text-opacity-50": disabled,
  });
  return React.createElement(
    "button",
    Object.assign(
      { onClick: onClick, type: "button", className: buttonClasses },
      props
    ),
    label
  );
};

const MenuItems = ({ menuItems, menuItemClick }) => {
  return React.createElement(
    "div",
    { className: "mt-2 shadow-lg w-48 rounded-md border border-gray-300" },
    menuItems.map(({ label, value }) =>
      React.createElement(
        "div",
        {
          className: "p-2 m-2 rounded-md hover:bg-gray-200 cursor-pointer",
          key: value,
          onClick:
            menuItemClick === null || menuItemClick === void 0
              ? void 0
              : menuItemClick.bind(undefined, label),
        },
        label
      )
    )
  );
};
const Dropdown = ({ menuItems, dropdownButtonText }) => {
  const [isOpen, setIsOpen] = useState(false);
  return React.createElement(
    "div",
    null,
    React.createElement(Button, {
      label: dropdownButtonText,
      onClick: () => setIsOpen(!isOpen),
    }),
    isOpen && React.createElement(MenuItems, { menuItems: menuItems })
  );
};

const Label = ({ label, required, helpText }) => {
  return React.createElement(
    React.Fragment,
    null,
    label &&
      React.createElement(
        "label",
        { className: "text-sm text-gray-600 mb-2 block" },
        label,
        " ",
        required &&
          React.createElement("span", { className: "text-red-600" }, "*"),
        helpText &&
          React.createElement("span", { className: "ml-2" }, "(", helpText, ")")
      )
  );
};
const Input = (_a) => {
  var {
      type = "text",
      label,
      placeholder,
      required,
      showInputValueLength,
      helpText,
    } = _a,
    props = __rest(_a, [
      "type",
      "label",
      "placeholder",
      "required",
      "showInputValueLength",
      "helpText",
    ]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const validateEmail = (text) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(text);
  };
  const validateNumber = (text) => {
    const numberPattern = /^\d*$/;
    return numberPattern.test(text);
  };
  const handleInputChange = (event) => {
    const value = event.target.value;
    if (type === "email") {
      if (!validateEmail(value)) {
        setError("Enter a valid email");
      } else {
        setError("");
      }
    } else if (type === "number") {
      if (!validateNumber(value)) {
        setError("Enter a valid number");
      } else {
        setError("");
      }
    }
    setInputValue(value);
  };
  return React.createElement(
    "div",
    null,
    React.createElement(Label, {
      label: label,
      required: required,
      helpText: helpText,
    }),
    React.createElement(
      "input",
      Object.assign(
        {
          className: "bg-gray-200 border-gray-300 border p-2 rounded-md",
          onChange: handleInputChange,
          value: inputValue,
          placeholder: placeholder,
        },
        props
      )
    ),
    showInputValueLength && inputValue.length
      ? React.createElement(
          "span",
          { className: "ml-2 text-xs" },
          inputValue.length
        )
      : null,
    error &&
      React.createElement(
        "div",
        { className: "text-sm text-red-600 mt-2" },
        error
      )
  );
};

const Select = ({
  options,
  label,
  placeholder = "Select...",
  required,
  helpText,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState("");
  const node = useRef(null);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    setSelection(value || "");
  }, [value]);
  const handleMenuSelect = (menuItem) => {
    setSelection(menuItem);
    setIsOpen(false);
  };
  const handleClickOutside = (e) => {
    var _a;
    if (
      (_a = node === null || node === void 0 ? void 0 : node.current) ===
        null || _a === void 0
        ? void 0
        : _a.contains(e === null || e === void 0 ? void 0 : e.target)
    ) {
      return;
    }
    setIsOpen(false);
  };
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return React.createElement(
    "div",
    null,
    React.createElement(Label, {
      label: label,
      required: required,
      helpText: helpText,
    }),
    React.createElement(
      "div",
      {
        ref: node,
        className:
          "bg-gray-200 border border-gray-300 p-2 rounded-md cursor-pointer flex justify-between w-48",
        onClick: toggleIsOpen,
      },
      selection || placeholder,
      React.createElement(
        "span",
        { className: "text-gray-500 flex items-center justify-center" },
        React.createElement("img", {
          width: "16px",
          height: "16px",
          src:
            "https://uxwing.com/wp-content/themes/uxwing/download/02-arrow/line-angle-down.png",
          alt: "down",
        })
      )
    ),
    isOpen &&
      React.createElement(MenuItems, {
        menuItemClick: handleMenuSelect,
        menuItems: options,
      })
  );
};

export { Button, Dropdown, Input, Select };
//# sourceMappingURL=index.es.js.map
