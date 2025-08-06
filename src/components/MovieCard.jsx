import React from 'react'
import { useMovieContext } from '../Context/MovieContext';
import '../css/MovieCard.css';
const MovieCard = ({ movie }) => {
  const { isFavorites, addToFavorite, removeFromFavorite } = useMovieContext();

  if (!movie || !movie.imdbID) {
    return null; // or show a fallback UI
  }

  const isFavorite = isFavorites(movie.imdbID);

  const onFavoriteClick = (e) => {
    e.preventDefault();
    if (isFavorite) {
      removeFromFavorite(movie.imdbID);
    } else {
      addToFavorite(movie);
    }
  };

  return (
    <div className='movie-card'>
      <div className='movie-poster'>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
          alt={movie.Title}
        />
        <div className='movie-overlay'>
          <button
            className={`favorite-btn ${isFavorite ? "active" : ""}`}
            onClick={onFavoriteClick}
            style={{ color: isFavorite ? "red" : "black" }}
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
};
export default MovieCard