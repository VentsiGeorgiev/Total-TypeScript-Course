const convertTime = (time: string | number | boolean) => {
  if (typeof time === "string") {
    console.log(time); // string
  } else if (typeof time === "number") {
    console.log(time); // number
  } else {
    console.log(time); // boolean
  }

  console.log(time); // string | number | boolean
};
