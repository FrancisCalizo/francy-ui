"use strict";
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
var Template = function (args) { return react_1.default.createElement(_1.default, null, "Button"); };
exports.Primary = Template.bind({});
exports.Primary.args = {};
//# sourceMappingURL=Button.stories.js.map