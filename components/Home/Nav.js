import React, { useState, useEffect } from "react";
import cls from "./Home.module.scss";
import { signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";

const Nav = () => {
  const [show, handleShow] = useState(false);
  const [session] = useSession();
  const path = session ? "/movies" : "/";
  const router = useRouter();
  const signOutHandler = () => {
    signOut({ callbackUrl: "http://localhost:3000/" });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        handleShow(false);
      });
    };
  }, []);

  const classes = show ? `${cls.nav} ${cls["nav__fixed"]}` : `${cls.nav}`;

  return (
    <div className={cls["nav__wrapper"]}>
      <div className={classes}>
        <div
          onClick={() => {
            router.push(path);
          }}
          className={cls["nav__logo"]}
        >
          NETFLIX
        </div>
        <div className={cls["nav__button"]}>
          {!session?.user && (
            <button onClick={() => router.push("/signin")}>Sign In</button>
          )}
          {session?.user && <button onClick={signOutHandler}>Sign Out</button>}
        </div>
      </div>
    </div>
  );
};

export default Nav;
