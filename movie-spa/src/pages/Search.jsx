import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../api/tmdb.js";
import MovieCard from "../components/MovieCard.jsx";

export default function Search() {
  const [params] = useSearchParams();
  const query = params.get("q") || "";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query) {
      searchMovies(query)
        .then((res) => setMovies(res.data.results))
        .catch(console.error);
    }
  }, [query]);

  if (!query) return <p>Escribe algo en el buscador…</p>;

  return (
    <section className="grid">
      {movies.length === 0 && <p>No se encontraron resultados.</p>}
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </section>
  );
}