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
    // Error: TS2345: Argument of type '"Value must be either First or Second"' is not assignable to parameter of type 'never'.
    unreachable(value, "Value must be either First or Second");
}
