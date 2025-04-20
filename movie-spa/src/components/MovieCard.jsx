import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  const img = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : "https://via.placeholder.com/342x513?text=No+Image";

  return (
    <Link to={`/movie/${movie.id}`} className="card">
      <img src={img} alt={movie.title} />
      <h3>{movie.title}</h3>
    </Link>
  );
}