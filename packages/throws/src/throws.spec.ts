import { expect, test, describe } from "bun:test";
import { throws } from "./throws";

describe("throws()", () => {
  test("should return [undefined, error] when function throws", () => {
    const [result, error] = throws(() => {
      throw new Error("error");
    });
    expect(result).toBe(undefined);
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toBe("error");
  });

  test("should return [result, undefined] when function does not throw", () => {
    const [result, error] = throws(() => "result");
    expect(result).toBe("result");
    expect(error).toBe(undefined);
  });

  test("should return [undefined, undefined] when function returns undefined", () => {
    const [result, error] = throws(() => undefined);
    expect(result).toBe(undefined);
    expect(error).toBe(undefined);
  });
});
