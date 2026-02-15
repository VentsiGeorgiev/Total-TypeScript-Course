import { Equal, Expect } from "@total-typescript/helpers";
import { expect, it } from "vitest";

const findUsersByName = (
  searchParams: { name?: string },
  users: {
    id: string;
    name: string;
  }[],
) => {
  const { name } = searchParams;
  if (name) {
    return users.filter((user) => user.name.includes(name));
  }
  return users;
  // # solution 2
  // const { name } = searchParams;
  // if (typeof name === "string") {
  //   return users.filter((user) => user.name.includes(name));
  // }
  // return users;
  // # solution 1
  // const { name } = searchParams;
  // if (typeof name !== "string") {
  //   return users;
  // }
  // return users.filter((user) => user.name.includes(name));
};

it("Should find the exact name", () => {
  const result = findUsersByName(
    {
      name: "Bob",
    },
    [
      {
        id: "1",
        name: "Bob",
      },
      {
        id: "2",
        name: "Alice",
      },
    ],
  );

  expect(result).toEqual([
    {
      id: "1",
      name: "Bob",
    },
  ]);

  type test = Expect<Equal<typeof result, { id: string; name: string }[]>>;
});
