import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovie } from "../api/tmdb.js";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovie(id)
      .then((res) => setMovie(res.data))
      .catch(console.error);
  }, [id]);

  if (!movie) return <p>Cargando…</p>;

  const img = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : "";

  return (
    <article className="detail">
      {img && <img src={img} alt={movie.title} />}
      <div className="info">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p>
          <strong>Rating:</strong> {movie.vote_average}
        </p>
        <p>
          <strong>Estreno:</strong> {movie.release_date}
        </p>
      </div>
    </article>
  );
}