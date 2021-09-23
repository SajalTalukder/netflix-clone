import React from "react";
import cls from "./Input.module.scss";

const Input = () => {
  return (
    <div className={cls["input-box"]}>
      <p>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <input type="email" placeholder="Email address" />
      <button>Get Started</button>
    </div>
  );
};

export default Input;
