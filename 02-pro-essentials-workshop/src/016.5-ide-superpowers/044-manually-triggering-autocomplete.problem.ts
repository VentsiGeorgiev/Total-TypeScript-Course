type MyObj = {
  foo: string;
  bar: number;
  baz: boolean;
};

const acceptsObj = (obj: MyObj) => {};

acceptsObj({
  // Autocomplete in here!
  foo: "hello",
  bar: 123,
  baz: true,
});

document.addEventListener(
  // Autocomplete this string!
  "load",
  (event) => {
    console.log(event);
  },
);
