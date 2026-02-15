import { Expect, Equal } from "@total-typescript/helpers";
import { expect, it } from "vitest";

type Data = {
  name: string;
  age: number;
};

const parsedData: Data = JSON.parse('{"name": "Alice", "age": 30}');

type test = Expect<
  Equal<
    typeof parsedData,
    {
      name: string;
      age: number;
    }
  >
>;

it("Should be the correct shape", () => {
  expect(parsedData).toEqual({
    name: "Alice",
    age: 30,
  });
});
