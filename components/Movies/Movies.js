import { useSession } from "next-auth/client";
import React from "react";
import Footer from "../Home/Footer/Footer";
import SignIn from "../signIn/SignIn";
import MovieBanner from "./MovieBanner";
import MovieRow from "./MovieRow";

const Movies = (props) => {
  const {
    trendingMovie,
    romanticMovie,
    actionMovie,
    horrorMovie,
    topRatedMovie,
    documentMovie,
    comedyMovie,
  } = props;
  const [session, loading] = useSession();

  if (loading) {
    return <h2 className="center">Loading...</h2>;
  }

  if (!session) {
    return <SignIn />;
  }

  return (
    <>
      <MovieBanner actionMovie={actionMovie} />
      <MovieRow title="Action Movies" movieList={actionMovie} isLarge />
      <MovieRow title="Top Rated Movies" movieList={topRatedMovie} />
      <MovieRow title="Trending Now" movieList={trendingMovie} />
      <MovieRow title="Best Horror Movies" movieList={horrorMovie} />
      <MovieRow title="Comedy Movies" movieList={comedyMovie} />
      <MovieRow title="Romantic Movies" movieList={romanticMovie} />
      <MovieRow title="Documentaries Movies" movieList={documentMovie} />
      <Footer />
    </>
  );
};

export default Movies;
