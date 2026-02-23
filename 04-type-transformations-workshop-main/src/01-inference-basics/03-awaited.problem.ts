import { Equal, Expect } from "../helpers/type-utils";

const getUser = () => {
  return Promise.resolve({
    id: "123",
    name: "John",
    email: "john@example.com",
  });
};

type ReturnPromiseValue = ReturnType<typeof getUser>;
type ReturnValue = Awaited<ReturnPromiseValue>;

type tests = [
  Expect<Equal<ReturnValue, { id: string; name: string; email: string }>>,
];
