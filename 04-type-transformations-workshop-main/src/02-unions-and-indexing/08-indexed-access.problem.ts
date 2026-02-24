import { Equal, Expect } from "../helpers/type-utils";

export const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
};

type Data = typeof fakeDataDefaults;

export type StringType = Data["String"];
export type IntType = Data["Int"];
export type FloatType = Data["Float"];
export type BooleanType = Data["Boolean"];
export type IDType = Data["ID"];

const obj = {
  a: "hi a",
  b: true,
  c: 1,
} as const;

type ConvertObjectToType = typeof obj;
type GetObjectKeys = keyof ConvertObjectToType;
type GetObjectValues = ConvertObjectToType[GetObjectKeys];

type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>,
];
