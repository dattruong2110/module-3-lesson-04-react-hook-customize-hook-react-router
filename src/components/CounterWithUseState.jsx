import React, { useState } from "react";

const CounterWithUseState = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      Count: {count}
      <br />
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </>
  );
};

export default CounterWithUseState;
