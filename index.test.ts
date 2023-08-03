import { expect, test } from "vitest";
import { unidirectionalDataFlow } from "./index";
import { JSDOM } from "jsdom";

test("starts state with empty object", () => {
  const {
    window: { document },
  } = new JSDOM();
  let latestState: {} | undefined = undefined;
  unidirectionalDataFlow({
    container: document.body,
    app: (_container, { state }) => {
      latestState = state;
    },
  });
  expect(latestState).toEqual({});
});
