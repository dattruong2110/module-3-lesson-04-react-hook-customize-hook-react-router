import React from "react";
import CartContext from "./CartContext";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

const MyShop = () => {
  const cartInfo = [
    {
      userId: 1,
      username: "Tý",
    },
    {
      userId: 2,
      username: "Tèo",
    },
    {
      userId: 3,
      username: "Tồ",
    },
  ];

  return (
    <>
      <CartContext.Provider value={cartInfo}> {/* Dùng phương thức Provider để nạp dữ liệu vào kho chứa dùng chung (context) thông qua phương thức value */}
        {/* Import những nơi cần chia sẻ dữ liệu trong context */}
        <HomePage />
        <AboutPage />
      </CartContext.Provider>
    </>
  );
};

export default MyShop;
