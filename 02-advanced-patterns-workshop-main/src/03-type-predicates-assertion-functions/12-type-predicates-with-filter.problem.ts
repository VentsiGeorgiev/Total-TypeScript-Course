import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

export const values = ["a", "b", undefined, "c", undefined];

// # solution 1
// const filteredValues = values.filter((value) => Boolean(value)) as string[];

// # solution 2
const filteredValues = values.filter((value): value is string =>
  Boolean(value),
);

it("Should filter out the undefined values", () => {
  expect(filteredValues).toEqual(["a", "b", "c"]);
});

it('Should be of type "string[]"', () => {
  type test1 = Expect<Equal<typeof filteredValues, string[]>>;
});
