import React, { useEffect, useState } from 'react'

const CounterWithUseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Watch Here");
        document.title = "Count: " + count
    }, [count])

  return (
    <>
      <h2>Click button to increase count</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}

export default CounterWithUseEffect;