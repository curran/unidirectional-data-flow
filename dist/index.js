const unidirectionalDataFlow = ({
  container,
  app,
  initialState = {}
}) => {
  let state = initialState;
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
    }
  };
};
export {
  unidirectionalDataFlow
};
