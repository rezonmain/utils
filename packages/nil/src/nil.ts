const nil = (val: unknown): val is null | undefined => {
  return val === null || val === undefined;
};
export { nil };
