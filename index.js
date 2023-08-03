// Sets up the app and renders it in the DOM.
// Returns an object with a `hotReloadApp` method that can be used to hot-reload
// the app.
export const unidirectionalDataFlow = ({
  // A DOM element
  container,

  // A function that renders an app, with the following signature:
  // `app(container, { state, setState });`
  // where:
  // - `container` is a DOM element
  // - `state` is an object
  // - `setState` is a function that takes a function that takes the current state
  //   and returns the next state
  //
  // The `app` function should render the app in the container, and should call
  // `setState` whenever it wants to update the state.
  app,
}) => {
  let state = {};
  let currentApp = app;

  const render = () => {
    currentApp(container, { state, setState });
  };

  const setState = (next) => {
    state = next(state);
    render();
  };

  render();

  return {
    hotReloadApp: (newApp) => {
      currentApp = newApp;
      render();
    },
  };
};
