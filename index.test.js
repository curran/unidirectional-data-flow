import { expect, test } from "vitest";
import { unidirectionalDataFlow } from "./index";
import { JSDOM } from "jsdom";

test("starts state with empty object", () => {
  const {
    window: { document },
  } = new JSDOM();
  let state;
  unidirectionalDataFlow({
    container: document.body,
    app: (container, { state: s, setState }) => {
      state = s;
    },
  });
  expect(state).toEqual({});
});
