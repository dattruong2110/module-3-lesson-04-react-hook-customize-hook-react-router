import React, { useCallback, useEffect, useState } from "react";

const ChildComponent = ({ loggingStatus }) => {
  // loggingStatus là 1 hàm được truyền vào
  useEffect(() => {
    loggingStatus();
  }, [loggingStatus]);
  return <div />;
};

const MyShopWithUseCallback = () => {
  const [count, setCount] = useState(0);
  const loggingStatus = useCallback(() => {
    console.log("Run from ChildComponent");
  }, []);
  const addMore = () => {
    setCount(count + 1);
  };
  return (
    <>
      <p>Current: {count}</p>
      <ChildComponent loggingStatus={loggingStatus} />{" "}
      {/* loggingStatus là 1 hàm không phải biến */}
      <button onClick={() => addMore()}>Click</button>
    </>
  );
};

export default MyShopWithUseCallback;
