/**
 * It's important to understand the terminology around unions:
 *
 * One of the type declarations below is a union. = B
 * One of the type declarations below is a discriminated union. = type A
 * One of the type declarations below is an enum. = type C
 *
 * Which is which?
 */

type A =
  | {
      type: "a";
      a: string;
    }
  | {
      type: "b";
      b: string;
    }
  | {
      type: "c";
      c: string;
    };

type B = "a" | "b" | "c";

enum C {
  A = "a",
  B = "b",
  C = "c",
}

export {};
