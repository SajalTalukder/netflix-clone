import React from "react";
import { getMovieById, action, topRated } from "../../apiRequest";
import MovieDetails from "../../components/Movies/MovieDetails";

const MovieDetailsPage = ({ movie, actionMovie, topMovie }) => {
  return (
    <MovieDetails movie={movie} actionMovie={actionMovie} topMovie={topMovie} />
  );
};

export default MovieDetailsPage;

export async function getStaticProps(context) {
  const movieId = context.params.movieId;

  const movie = await getMovieById(movieId);
  const actionMovie = await action();
  const topMovie = await topRated();

  return {
    props: {
      movie: movie,
      actionMovie,
      topMovie,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const movies = await action();

  const paths = movies.results.map((movie) => ({
    params: { movieId: movie.id.toString() },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}
