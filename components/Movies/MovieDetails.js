/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Nav from "../Home/Nav";
import cls from "./MovieDetails.module.scss";
import ListIcon from "@material-ui/icons/List";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PlayCircleFilled from "@material-ui/icons/PlayCircleFilled";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import MovieRow from "./MovieRow";
import Footer from "../../components/Home/Footer/Footer";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import MovieModal from "./MovieModal";
import { useRouter } from "next/router";

function timeConvert(n) {
  const num = n;
  const hours = num / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return rhours + " hour and " + rminutes + " minute";
}

const MovieDetails = ({ movie, actionMovie, topMovie }) => {
  const router = useRouter();

  const [trailerUrl, setTrailerUrl] = useState("");
  const time = movie?.runtime;
  const imgUrl = `https://image.tmdb.org/t/p/original${movie?.poster_path}`;
  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const closeHandler = () => {
    setTrailerUrl("");
  };

  const showTrailer = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URL(url).search;
          const params = new URLSearchParams(urlParams).get("v");
          if (params) {
            setTrailerUrl(params);
          } else {
            setTrailerUrl("Ob4NC4D6zTU");
          }
        })
        .catch((err) => {
          setTrailerUrl("Ob4NC4D6zTU");
        });
    }
  };

  return (
    <>
      {trailerUrl && (
        <MovieModal onClose={closeHandler}>
          <Youtube videoId={trailerUrl} opts={opts} />
        </MovieModal>
      )}
      <header
        className={cls["header"]}
        style={{
          height: "70vh",
          backgroundSize: "cover",
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
          backgroundPosition: "center center",
        }}
      >
        <Nav />
        <div
          onClick={() => {
            showTrailer(movie);
          }}
          className={cls["header__icon"]}
        >
          <PlayCircleFilled className={cls["header__icon-com"]} />
        </div>
      </header>
      <div className={cls["movie-details"]}>
        <div className={cls["movie-details__content"]}>
          <h2 className={cls["movie-details__title"]}>
            {movie?.name || movie?.title || movie?.orginal_name || "Unknown"}
          </h2>
          <div className={cls["movie-details__icon-div"]}>
            <div className={cls["movie-details__time-div"]}>
              <span className={cls["movie-details__clock"]}>
                <QueryBuilderIcon
                  className={cls["movie-details__clock-icon"]}
                />
              </span>
              <span className={cls["movie-details__time"]}>
                {timeConvert(time)}
              </span>
            </div>

            <div className={cls["movie-details__icon-box"]}>
              <ListIcon className={cls["movie-details__icon"]} />
            </div>
            <div className={cls["movie-details__icon-box"]}>
              <FavoriteBorderIcon className={cls["movie-details__icon"]} />
            </div>
            <div className={cls["movie-details__icon-box"]}>
              <BookmarkBorderIcon className={cls["movie-details__icon"]} />
            </div>
            <div className={cls["movie-details__icon-box"]}>
              <StarBorderIcon className={cls["movie-details__icon"]} />
            </div>

            <div className={cls["movie-details__icon-box"]}>
              <h2 className={cls["movie-details__icon"]}>
                {movie?.adult ? "18+" : "16+"}
              </h2>
            </div>
          </div>
          <div className={cls["movie-details__rating-box"]}>
            <h2 className={cls["movie-details__rating-title"]}>IMDB</h2>
            <h2 className={cls["movie-details__rating"]}>
              {movie?.vote_average}
            </h2>
          </div>
          <div className={cls["movie-details__genres"]}>
            <h1 className={cls["movie-details__genres-title"]}>Genres </h1>

            {movie?.genres?.map((gen) => {
              return (
                <h2 key={gen.id} className={cls["movie-details__genres-item"]}>
                  {gen.name}
                </h2>
              );
            })}
          </div>
          <div className={cls["movie-details__release"]}>
            <h1>Release Date</h1>
            <h2>{movie?.release_date}</h2>
          </div>

          <p>{movie?.overview}</p>
        </div>
        <div className={cls["movie-details__image"]}>
          <img src={imgUrl} alt="movie" />
        </div>
      </div>
      <MovieRow
        title=" Recomended action Movies"
        movieList={actionMovie}
        isLarge
      />
      <MovieRow
        title="Recomended Top Rated Movies"
        movieList={topMovie}
        isLarge
      />
      <div className="center">
        <button
          onClick={() => {
            router.push("/movies");
          }}
          className={cls["back-button"]}
        >
          Go to Movie Page
        </button>
      </div>
      <Footer />
    </>
  );
};

export default MovieDetails;
