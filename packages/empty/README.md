# `empty()`

Returns true for empty values

```js
empty(undefined); // true
empty(null); // true
empty(0); // true
empty(""); // true
empty(NaN); //true
empty({}); // true
empty([]); // true
empty(1); // false
empty(() => {}); // false
empty("hello"); // false
```
