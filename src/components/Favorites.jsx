import React from 'react'
import '../css/Favorites.css';
import { useMovieContext } from '../Context/MovieContext';  
import MovieCard from './MovieCard';
const Favorites = () => {
  const { favorites } = useMovieContext();

  if (!favorites || favorites.length === 0) {
    return (
      <div className='favorites-empty'>
        <h2>No Favorite Movies Yet</h2>
        <p>Please select a movie to add to your favorites.</p>
      </div>
    );
  }

  return (
    <div className="favorites">
      <h1>Your Favorites</h1>
      <div className='favorites-container'>
        <h2>Favorite Movies</h2>
        <div className="movies-grid">
          {favorites.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;