/**
 *  ## Wraps a function that throws
 *  ### Usage
 *  ```
 *  const [result, error] = throws(() => { throw new Error('error') });
 * if (error) {...}
 *  ```
 */
function throws<T>(fn: (...args: any[]) => T): [T | undefined, any] {
  try {
    return [fn(), undefined];
  } catch (error) {
    return [undefined, error];
  }
}

export { throws };
