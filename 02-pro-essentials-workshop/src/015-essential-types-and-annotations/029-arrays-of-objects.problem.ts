// // # solution 1
// type Recipe = {
//   title: string;
//   ingredients: { name: string; quantity: string }[];
//   instructions: string;
// };

// // # Solution 2
// type Recipe = {
//   title: string;
//   ingredients: Array<{ name: string; quantity: string }>;
//   instructions: string;
// };

// // # solution 3/4
type Ingredients = { name: string; quantity: string };
// could be also done with interface
type Recipe = {
  title: string;
  // ingredients: Array<Ingredients>;
  ingredients: Ingredients[];
  instructions: string;
};

const processRecipe = (recipe: Recipe) => {
  // Do something with the recipe in here
};

processRecipe({
  title: "Chocolate Chip Cookies",
  ingredients: [
    { name: "Flour", quantity: "2 cups" },
    { name: "Sugar", quantity: "1 cup" },
  ],
  instructions: "...",
});
