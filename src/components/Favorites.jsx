import React from 'react'
import '../css/Favorites.css';
import { useMovieContext } from '../Context/MovieContext';  
import MovieCard from './MovieCard';
const Favorites = () => {
    const { favorites } = useMovieContext();
    if(favorites){
        return (
            <div className="favorites">
            <h1>Your Favorites</h1>
            <div className='favorites-container'>
                <h2>Favorites Movies</h2>
                <div className="movies-grid">
                    {favorites.map(movie => (
                        <MovieCard key={movie.imdbID} movie={movie} />
                    ))}
                </div>
            </div>
            </div>
        );
    }
  return (
    <div className='favorites-empty'>
        <h2>No Favorites Movies Yet</h2>
        <p>Start adding to your favorites and they will appear here</p>
    </div>
  )
}

export default Favorites