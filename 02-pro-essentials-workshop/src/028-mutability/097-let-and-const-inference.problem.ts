// CODE

// let type = "button";
// solution 1
const type = "button";

// solution 2
// let type = "button" as const;

// solution 3
// let type: "button" | "submit" | "reset" = "button";

// TESTS

type ButtonAttributes = {
  type: "button" | "submit" | "reset";
};

const buttonAttributes: ButtonAttributes = {
  type,
};
