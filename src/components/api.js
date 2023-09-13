
import axios from "axios";


const API_KEY = 'dab4c4a62a8aa2e980834751b172c3fb';
const BASE_URL = 'https://api.themoviedb.org/3';

const getMovies = async page => {
  const res = await axios.get(
    `${BASE_URL}trending/movie/day?${API_KEY}&page=${page}`
  );

  const trendingMovies = res.data.results.map(
    ({ id, title, poster_path, vote_average }) => {
      return { id, title, poster_path, vote_average };
    }
  );
  return trendingMovies;
};


const getById = async id => {
  let respById = await axios.get(`${BASE_URL}movie/${id}?${API_KEY}`);
  return respById.data;
};


const getReviews = async id => {
  const resReviews = await axios.get(
    `${BASE_URL}movie/${id}/reviews?${API_KEY}`
  );
  const reviews = resReviews.data.results.map(({ author, content, id }) => {
    return { author, content, id };
  });
  return reviews;
};


const getCasts = async id => {
  const resCasts = await axios.get(`${BASE_URL}movie/${id}/credits?${API_KEY}`);
  return resCasts.data;
};


const getByQuery = async (query, page) => {
  const resByQuery = await axios.get(
    `${BASE_URL}search/movie?${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`
  );
  return resByQuery.data.results;
};

export { getMovies, getById, getReviews, getCasts, getByQuery };