import { useEffect, useState } from "react";
import { getPopular } from "../api/tmdb.js";
import MovieCard from "../components/MovieCard.jsx";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopular()
      .then((res) => setMovies(res.data.results))
      .catch(console.error);
  }, []);

  return (
    <section className="grid">
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </section>
  );
}