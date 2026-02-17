import { expect, it } from "vitest";

type MyObj = {
  a: number;
  b: number;
};

const getObj = () => {
  const obj = JSON.parse('{ "a": 123, "b": 456 }');

  return obj;
};

it("Should return an obj", () => {
  const obj = getObj() as MyObj;

  expect(obj.b).toEqual(456);

  expect(
    // @ts-expect-error c doesn't exist on obj
    obj.c,
  ).toEqual(undefined);
});
