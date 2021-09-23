import React from "react";
import Nav from "./Nav";
import cls from "./Home.module.scss";
import Input from "../UI/Input";

const Header = () => {
  return (
    <div className={cls["header"]}>
      <Nav />
      <div className={cls["header__content"]}>
        <h1>Unlimited movies, TV shows, and more </h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <Input />
      </div>
    </div>
  );
};

export default Header;
