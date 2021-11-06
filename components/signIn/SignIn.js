import React from "react";
import cls from "./signin.module.scss";
import Image from "next/image";
import { signIn } from "next-auth/client";

function SignIn() {
  const signInHandler = () => {
    signIn(null, { callbackUrl: "https://netflix-clone-rho-ten.vercel.app/movies" });
  };
  return (
    <div className={cls["signin"]}>
      <div className={cls["signin__logo"]}>
        <Image
          src="/images/logo2.png"
          alt="logo"
          height={300}
          width={600}
          objectFit="cover"
        />
      </div>
      <div className={cls["signin__button"]}>
        <button onClick={signInHandler}>Sign In</button>
      </div>
    </div>
  );
}

export default SignIn;
