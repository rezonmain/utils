# `throws()`

Wraps a function that throws, allows for (IMO) better control logic flow

```js
const [result, error] = throws(() => { throw new Error('error') });
if (error) {...}
```
