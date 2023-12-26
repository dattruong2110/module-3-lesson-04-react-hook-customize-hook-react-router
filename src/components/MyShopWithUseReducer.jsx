import React, { useReducer } from "react";

const initialState = { count: 0 };

const countReducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 };
    case "decrease":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const MyShopWithUseReducer = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <>
      <h2>Count {state.count}</h2>
      <button onClick={() => dispatch({ type: "increase" })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrease" })}>Decrease</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default MyShopWithUseReducer;
