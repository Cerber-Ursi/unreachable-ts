"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function unreachable(checkedValue, errorValue) {
    throw (errorValue || new TypeError("Unexpected value: " + JSON.stringify(checkedValue)));
}
exports.unreachable = unreachable;
