import api from "./api";
const {
  fetchTrending,
  fetchActionMovies,
  fetchComedyMovies,
  fetchDocumentariesMovies,

  fetchHorrorMovies,
  fetchTopRated,
  fetchRomanticMovies,
} = api;

const fetchData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const trending = async () => {
  const trendingMovie = await fetchData(fetchTrending);
  return trendingMovie;
};
const topRated = async () => {
  const topRatedMovie = await fetchData(fetchTopRated);
  return topRatedMovie;
};

const action = async () => {
  const actionMovie = await fetchData(fetchActionMovies);
  return actionMovie;
};
const horror = async () => {
  const horrorMovie = await fetchData(fetchHorrorMovies);
  return horrorMovie;
};
const romantic = async () => {
  const romanticMovie = await fetchData(fetchRomanticMovies);
  return romanticMovie;
};
const comedy = async () => {
  const comedyMovie = await fetchData(fetchComedyMovies);
  return comedyMovie;
};
const document = async () => {
  const documentMovie = await fetchData(fetchDocumentariesMovies);
  return documentMovie;
};

const getMovieById = async (id) => {
  const url = `
https://api.themoviedb.org/3/movie/${id}?api_key=0a6a759ac45440458b32343a7d778674&language=en-US`;

  const movieById = await fetchData(url);
  return movieById;
};

export {
  topRated,
  action,
  trending,
  document,
  horror,
  romantic,
  comedy,
  getMovieById,
};
