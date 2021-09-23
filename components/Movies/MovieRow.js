/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { Fragment } from "react";

import style from "./MovieRow.module.scss";

const MovieRow = ({ title, movieList, isLarge }) => {
  const router = useRouter();

  const classes = isLarge
    ? `${style.movieImage} ${style.large}`
    : `${style.movieImage}`;
  const images = movieList.results.map((movie) => {
    return (
      <img
        loading="lazy"
        className={classes}
        key={movie.id}
        src={`https://image.tmdb.org/t/p/original${
          isLarge ? movie.poster_path : movie.backdrop_path
        }`}
        alt={movie.name}
        onClick={() => router.push(`/movies/${movie.id}`)}
      />
    );
  });

  return (
    <Fragment>
      <div className={style.movieRow}>
        <h2>{title}</h2>
        <div className={style.movieList}>{images}</div>
      </div>
    </Fragment>
  );
};

export default MovieRow;
