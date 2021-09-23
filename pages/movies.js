import { getSession } from "next-auth/client";
import React from "react";
import {
  trending,
  action,
  comedy,
  horror,
  topRated,
  document,
  romantic,
} from "../apiRequest";
import Movies from "../components/Movies/Movies";

const MoviePage = ({
  trendingMovie,
  romanticMovie,
  actionMovie,
  horrorMovie,

  topRatedMovie,
  documentMovie,
  comedyMovie,
}) => {
  return (
    <Movies
      trendingMovie={trendingMovie}
      romanticMovie={romanticMovie}
      actionMovie={actionMovie}
      horrorMovie={horrorMovie}
      topRatedMovie={topRatedMovie}
      documentMovie={documentMovie}
      comedyMovie={comedyMovie}
    />
  );
};

export default MoviePage;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const trendingMovie = await trending();
  const romanticMovie = await romantic();
  const actionMovie = await action();
  const horrorMovie = await horror();

  const topRatedMovie = await topRated();
  const documentMovie = await document();
  const comedyMovie = await comedy();

  return {
    props: {
      session,
      trendingMovie,
      romanticMovie,
      actionMovie,
      horrorMovie,

      topRatedMovie,
      documentMovie,
      comedyMovie,
    },
  };
}
