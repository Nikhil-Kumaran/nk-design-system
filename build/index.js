'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
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

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

const Button = (_a) => {
    var { type = "normal", backgroundColor, label, disabled, onClick } = _a, props = __rest(_a, ["type", "backgroundColor", "label", "disabled", "onClick"]);
    const buttonClasses = classnames({
        "px-3 leading-8 rounded transition-all duration-200": true,
        "bg-gray-200 hover:bg-gray-300": type === "normal" && !disabled,
        "bg-blue-600 hover:bg-blue-500 text-white": type === "primary" && !disabled,
        "bg-transparent hover:bg-gray-200": type === "subtle" && !disabled,
        "bg-red-600 hover:bg-red-500 text-white": type === "danger" && !disabled,
        "bg-yellow-600 hover:bg-yellow-500": type === "warning" && !disabled,
        "cursor-not-allowed bg-gray-200 text-black text-opacity-50": disabled,
    });
    return (React__default['default'].createElement("button", Object.assign({ onClick: onClick, type: "button", className: buttonClasses }, props), label));
};

const Dropdown = ({ menuItems }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (React__default['default'].createElement("div", null,
        React__default['default'].createElement(Button, { label: "Dropdown", onClick: () => setIsOpen(!isOpen) }),
        isOpen && (React__default['default'].createElement("div", { className: "mt-2 shadow-lg w-48 rounded-md border border-gray-300" }, menuItems.map(({ label, value }) => (React__default['default'].createElement("div", { className: "p-2 m-2 rounded-md hover:bg-gray-200 cursor-pointer", key: value }, label)))))));
};

exports.Button = Button;
exports.Dropdown = Dropdown;
//# sourceMappingURL=index.js.map
