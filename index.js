export const unidirectionalDataFlow = ({
  container,
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
