/**
 *  ## Wraps a function that throws
 *  ### Usage
 *  ```
 *  const [result, error] = throws(() => { throw new Error('error') });
 * if (error) {...}
 *  ```
 */
function throws<T, E = any>(fn: (...args: any[]) => T): [T?, E?] {
  try {
    return [fn(), undefined];
  } catch (error) {
    return [undefined, error as E];
  }
}

export { throws };
