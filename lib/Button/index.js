"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var styled_components_1 = __importDefault(require("styled-components"));
function index(props) {
    return react_1.default.createElement(Button, __assign({}, props), "Submit");
}
exports.default = index;
var Button = styled_components_1.default.button.attrs({ type: 'button' })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  border: 1px solid black;\n  padding: 5px 10px;\n  cursor: pointer;\n\n  background: ", ";\n  background: ", ";\n"], ["\n  display: inline-block;\n  border: 1px solid black;\n  padding: 5px 10px;\n  cursor: pointer;\n\n  background: ", ";\n  background: ", ";\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return color === 'blue' && theme.colors.blue;
}, function (_a) {
    var color = _a.color;
    return color === 'red' && '#f00';
});
var templateObject_1;
//# sourceMappingURL=index.js.map