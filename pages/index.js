import React from "react";
import Home from "../components/Home/Home";
import { getSession } from "next-auth/client";
const HomePage = () => {
  return <Home />;
};

export default HomePage;

export async function getStaticProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
