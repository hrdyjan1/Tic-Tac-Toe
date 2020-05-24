Three steps to set up typescript on JavaScript project

For Linting instead of TSlint, I have chosen ESlint [TypeScript group prefer ESlint](https://github.com/Microsoft/TypeScript/issues/29288#developer-productivity-tools-and-integration)

1. First step
 - $ npx tsc --init
 - tsconfig (noImplicitAny: true)
 - .js => .ts
 - run tests

2. Second step
 - tsconfig (noImplicitAny: false, strict: true, strictNullChecks: true, strictFunctionTypes: true, strictBindCallApply: true)
 - correct type aliases and interfaces
 - run tests
