// Sets up the app and renders it in the DOM.
// Returns an object with a `hotReloadApp` method that can be used to hot-reload
// the app.
//
// The generic type `T` is the shape of the state.
export const unidirectionalDataFlow = <T = {}>({
  container,
  app,
  initialState = {} as T,
}: {
  // A DOM element
  container: HTMLElement;

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
  app: App<T>;

  // The initial state of the app (optional).
  // Defaults to an empty object.
  initialState?: T;
}) => {
  let state = initialState;
  let currentApp = app;

  const render = () => {
    currentApp(container, { state, setState });
  };

  const setState = (next: (state: T) => T) => {
    state = next(state);
    render();
  };

  render();

  return {
    hotReloadApp: (newApp: App<T>) => {
      currentApp = newApp;
      render();
    },
  };
};

type App<T> = (
  container: HTMLElement,
  { state, setState }: { state: T; setState: (next: (state: T) => T) => void }
) => void;
