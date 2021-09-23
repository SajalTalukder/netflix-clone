import React from "react";
import Nav from "../Home/Nav";
import cls from "./MovieBanner.module.scss";

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
const MovieBanner = ({ actionMovie }) => {
  const bannerMovie =
    actionMovie.results[
      Math.floor(Math.random() * actionMovie.results.length - 1)
    ];

  return (
    <div
      className={cls["banner"]}
      style={{
        height: "70vh",
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(
      to right,
     rgba(0,0,0,0.6) 40%,
      transparent 60%
    ),url(https://image.tmdb.org/t/p/original${bannerMovie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <Nav />

      <div className={cls["banner__content"]}>
        <h2>
          {bannerMovie?.name || bannerMovie?.title || bannerMovie?.orginal_name}
        </h2>
        <p>{truncate(bannerMovie?.overview, 280)}</p>
        <div className={cls["banner__button"]}>
          <button className={cls["banner__button-1"]}>Play</button>
          <button className={cls["banner__button-2"]}>My List</button>
        </div>
      </div>
    </div>
  );
};

export default MovieBanner;
