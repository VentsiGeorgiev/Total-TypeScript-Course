import { Extends, Expect } from "@total-typescript/helpers";

type UserProduct = {
  id: string;
  createdAt: Date;
  name: string;
};
type UserEmail = {
  email: string;
};

type ProductPrice = {
  price: number;
};

type User = UserEmail & UserProduct;

type Product = ProductPrice & UserProduct;

type tests = [
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        email: string;
      },
      User
    >
  >,
  Expect<
    Extends<
      {
        id: string;
        createdAt: Date;
        name: string;
        price: number;
      },
      Product
    >
  >,
];
