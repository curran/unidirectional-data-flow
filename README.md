# unidirectional-data-flow

A simple implementation of the unidirectional data flow pattern for state management in JavaScript.

![Image](https://github.com/user-attachments/assets/584b2ca3-8360-428d-9511-272fbb2698f0)

This implementation provides a minimal framework for developing interactive applications using vanilla JavaScript. The idea behind this library is to enable development of small isolated interactive applications using consistent patterns and minimal dependencies. Applications developed in this way could be ideal reference examples because when implemented in this way, they can easily be wrapped or packaged as components in various frameworks.

## Features

- **Unidirectional Data Flow**: Unify and simplity your state management
- **Framework Agnostic**: Integrates seamlessly with various frameworks
- **Simplicity and Minimalism**: Easy-to-understand API and minimal overhead

### `unidirectionalDataFlow`

**`unidirectionalDataFlow({ container, main })`**

The `unidirectionalDataFlow` function creates a self-contained unidirectional data flow system. It manages state updates and rendering, while also supporting hot reloading for development workflows.

```js
import { unidirectionalDataFlow } from 'unidirectional-data-flow';

const app = unidirectionalDataFlow({
  container,
  main: (container, { state, setState }) => {
    // Your visualization logic here
  },
});
```

The function returns an object with a `hotReload` method that can be used to update the main rendering function while preserving state:

```js
// During development, when the main function changes:
app.hotReload((container, { state, setState }) => {
  // Updated application logic
});
```


See also [d3-rosetta](https://github.com/curran/d3-rosetta).
