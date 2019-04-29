export function unreachable(checkedValue, errorValue) {
    throw errorValue || new TypeError("Unexpected value: " + JSON.stringify(checkedValue));
}
