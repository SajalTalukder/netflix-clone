import { getSession } from "next-auth/client";
import React from "react";
import SignIn from "../components/signIn/SignIn";

const signin = () => {
  return <SignIn />;
};

export default signin;
export async function getStaticProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
