import React, { useMemo, useState } from "react";

const MyShopWithUseMemo = () => {
  const [text, setText] = useState("Hello");

  const ChildComponent = ({ text }) => {
    console.log("rendered again!");
    return <>{text}</>;
  };

  const MemoizedComponent = useMemo(
    () => <ChildComponent text={text} />,
    [text]
  );

  return (
    <>
      <button onClick={() => setText("Hello!")}>Hello!</button>
      <button onClick={() => setText("Hola!")}>Hola!</button>
      <br />
      <h2>{MemoizedComponent}</h2>
    </>
  );
};

export default MyShopWithUseMemo;
