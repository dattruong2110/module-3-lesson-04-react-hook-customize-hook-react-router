import React, { useContext } from "react";
import CartContext from "./CartContext";

const AboutPage = () => {
  const cartInfo = useContext(CartContext);

  return (
    <>
      {cartInfo.map((cartInfor) => (
        <p>Username: {cartInfor.username}</p>
      ))}
    </>
  );
};

export default AboutPage;
