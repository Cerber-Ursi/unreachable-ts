# unreachable-ts

This is a small one-liner function for marking the unreachable code which can be checked to be unreachable at type-level.
 
### Examples
The main example use-case is an exhaustive switch-case statement, like this:

```typescript
type Union = 'First' | 'Second';
declare function getValue(): Union;

import { unreachable } from 'unreachable-ts';

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
```

If the `getValue` function returns any value not corresponding to the declared type, it will fall into the `default` branch and throw a runtime error.

On the other hand, if the `Union` type is changed but the `switch/case` is not, TypeScript will throw a compilation error:

```typescript
type Union = 'First' | 'Second' | 'Third';
declare function getValue(): Union;

import { unreachable } from 'unreachable-ts';

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
```

#### Why making a package for this?! It's overkill!

Well, it's mainly for the sake of removing repetition. It's better to have one import in several places than to duplicate that code, don't you think so? And anyway, if you feel like you don't want to pull a whole project for a small one-liner, you are free to just copy the contents to you - it's in public domain, anyway.

#### Isn't there an [`unreachable`](https://www.npmjs.com/package/unreachable) package already?

Well, there _is_... but you know, every programmer has to reinvent the wheel sometimes, right?

#### Why your package is better that that?

Just because of license (the **Un**license), probably. Nothing more. It's just too simple to be done wrong.

#### I'd like to add some more functionality for my use case...

Just don't forget that this is public domain, and, if I ever get any pull request - this request's contents will be considered public domain too.

#### Why only TypeScript? What about Flow?

It seems that TypeScript has won anyway. And, to be honest, I never worked with Flow, so... how can I compete on this field?
