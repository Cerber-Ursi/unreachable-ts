import { unreachable } from '../src';

type Union = 'First' | 'Second' | 'Third';

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
    // Error: TS2345: Argument of type 'Error' is not assignable to parameter of type 'never'.
    unreachable(value, new Error("Value must be either First or Second"));
}
