// import { sum } from "@/utils/sum";
import { test, expect, assert } from "vitest";
import { add } from "../src/util/add";

test("first", () => {
  expect(1 + 1).toBe(2);
});

test("add", () => {
  expect(add(1, 4)).toBe(5);
});
