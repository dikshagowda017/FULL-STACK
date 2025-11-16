import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Simulate fetching initial count (like from an API)
  useEffect(() => {
    setTimeout(() => {
      setCount(5); // initial value after "fetch"
    }, 1000);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Counter Component</h2>
      <h3>Count: {count}</h3>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(count * 2)}>Double</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
