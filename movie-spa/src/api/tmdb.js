import axios from "axios";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const api = axios.create({ baseURL: "https://api.themoviedb.org/3" });

export const getPopular = () => api.get(`/movie/popular`, { params: { api_key: apiKey } });
export const getMovie = (id) => api.get(`/movie/${id}`, { params: { api_key: apiKey } });
export const searchMovies = (q) => api.get(`/search/movie`, { params: { api_key: apiKey, query: q } });