import { expect, it } from "vitest";

// solution 1
// type BaseType = {
//   id: string;
//   name: string;
//   imageId: string;
// };

// type User = {
//   age: number;
// } & BaseType;

// type Organisation = {
//   address: string;
// } & BaseType;

// type Product = {
//   price: number;
// } & BaseType;

// type Entity = User | Organisation | Product;

// solution 2
// interface BaseEntity {
//   id: string;
//   name: string;
//   imageId: string;
// }
// interface User extends BaseEntity {
//   age: number;
// }

// interface Organisation extends BaseEntity {
//   address: string;
// }

// interface Product extends BaseEntity {
//   price: number;
// }

// type Entity = User | Organisation | Product;

type User = {
  id: string;
  name: string;
  age: number;
  imageId: string;
};

type Organisation = {
  id: string;
  name: string;
  address: string;
  imageId: string;
};

type Product = {
  id: string;
  name: string;
  price: number;
  imageId: string;
};

const getAvatarImage = (entity: User | Organisation | Product) => {
  {
    // Should not be able to access properties that are
    // not common to both types

    if ("age" in entity) {
      entity.age;
    }

    // @ts-expect-error
    entity.address;

    // @ts-expect-error
    entity.price;
  }

  return {
    url: `https://via.placeholder.com/${entity.imageId}`,
    alt: `${entity.name} Avatar`,
  };
};

it("Should work for a user", () => {
  const result = getAvatarImage({
    id: "1",
    name: "John",
    age: 20,
    imageId: "abc123",
  });

  expect(result).toEqual({
    url: "https://via.placeholder.com/abc123",
    alt: "John Avatar",
  });
});

it("Should work for an organisation", () => {
  const result = getAvatarImage({
    id: "1",
    name: "Total TypeScript",
    address: "1 Main Street",
    imageId: "abc123",
  });

  expect(result).toEqual({
    url: "https://via.placeholder.com/abc123",
    alt: "Total TypeScript Avatar",
  });
});

it("Should work for a product", () => {
  const result = getAvatarImage({
    id: "1",
    name: "TypeScript Mug",
    price: 10,
    imageId: "abc123",
  });

  expect(result).toEqual({
    url: "https://via.placeholder.com/abc123",
    alt: "TypeScript Mug Avatar",
  });
});
