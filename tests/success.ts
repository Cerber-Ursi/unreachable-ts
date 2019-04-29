import { unreachable } from '../src';

type Union = 'First' | 'Second';

declare function getValue(): Union;

const value: Union = getValue();
switch (value) {
  case 'First':
    // do something
    break;
  case 'Second':
    // do something else
    break;
  default:
    unreachable(value, new Error("Value must be either First or Second"));
}
