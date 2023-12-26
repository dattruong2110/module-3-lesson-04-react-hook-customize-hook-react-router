import React, { useContext } from "react";
import CartContext from "./CartContext";

const HomePage = () => {
  const cartInfo = useContext(CartContext);

  return (
    <>
      {cartInfo.map((cartInfor) => (
        <p>UserID: {cartInfor.userId}</p>
      ))}
    </>
  );
};

export default HomePage;
