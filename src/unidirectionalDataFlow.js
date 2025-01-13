export const unidirectionalDataFlow = ({ container, main }) => {
  let state = {};
  let cleanup;

  const render = () => {
    cleanup && cleanup();
    cleanup = main(container, { state, setState });
  };

  const setState = (next) => {
    state = next(state);
    render();
  };

  render();

  return {
    hotReload: (newMain) => {
      main = newMain;
      render();
    },
    unmount: () => {
      cleanup && cleanup();
    },
  };
};
