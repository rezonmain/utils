/**
 * ### Returns true for empty values
 */
const empty = (val: unknown): val is null | undefined => {
  if (!val) return true;
  if (Array.isArray(val)) return val.length === 0;
  if (typeof val === "object") return Object.keys(val).length === 0;
  return false;
};

export { empty };
