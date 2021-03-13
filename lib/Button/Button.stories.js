"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var _1 = __importDefault(require("./"));
exports.default = {
    title: 'Button',
    component: _1.default,
    argTypes: {},
};
var Template = function (args) { return react_1.default.createElement(_1.default, __assign({}, args)); };
exports.Primary = Template.bind({});
exports.Primary.args = {
    color: 'blue',
};
//# sourceMappingURL=Button.stories.js.map