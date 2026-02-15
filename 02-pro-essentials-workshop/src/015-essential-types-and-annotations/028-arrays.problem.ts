// CODE

// How do we type 'items' in the ShoppingCart?

// // # solution 1
type ShoppingCart = {
  userId: string;
  items: string[];
};
// # solution 2
// type ShoppingCart = {
//   userId: string;
//   items: Array<string>;
// };

// TESTS

const processCart = (cart: ShoppingCart) => {
  // Do something with the cart in here
};

processCart({
  userId: "user123",
  items: ["item1", "item2", "item3"],
});
