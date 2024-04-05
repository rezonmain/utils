import { expect, test, describe } from "bun:test";
import { empty } from "./empty";

describe("empty()", () => {
  test.each([
    [undefined, true],
    [null, true],
    [0, true],
    [1, false],
    ["", true],
    ["a", false],
    [{}, true],
    [[], true],
    [NaN, true],
    [Infinity, false],
    [() => {}, false],
    [Symbol(), false],
  ])("value %o should return %j", (value, expected) => {
    expect(empty(value)).toBe(expected);
  });
});
