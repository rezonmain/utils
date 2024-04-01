import { expect, test, describe } from "bun:test";
import { nil } from "./nil";

describe("nil()", () => {
  test.each([
    [undefined, true],
    [null, true],
    [0, false],
    [1, false],
    ["", false],
    ["a", false],
    [{}, false],
    [[], false],
    [NaN, false],
    [Infinity, false],
    [() => {}, false],
    [Symbol(), false],
  ])("value %o should return %j", (value, expected) => {
    expect(nil(value)).toBe(expected);
  });
});
