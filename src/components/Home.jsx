// import React, { use } from 'react'
// import MovieCard from './MovieCard';
// import { useState, useEffect } from 'react';
// import { searchMovies, getPopularMovies } from "../Services/api";

// import '../css/Home.css';
// const Home = () => {
//     const [searchQuery, setSearchQuery] = useState("");

//     const [movies, setMovies] = useState([]); 
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);
//     useEffect(()=>{
//         const loadPopularMovies = async () =>{
//             try {
//                 const popularMovies = await getPopularMovies() 
//             } catch (err) {
//                 console.err("Error fetching popular movies:", err);
//                 setError("Failed to fetch popular movies");
//             }
//             finally{}
//         }
//         loadPopularMovies();
//     },[])

//     const handleSearch = (e) => {
//         e.preventDefault()
//         alert(searchQuery)
//         setSearchQuery("")
//     }
//   return (

//     <div className='home'>

//         <form onSubmit={handleSearch} className='search-form'>
//             <input type="text" placeholder='Search for movies' className='search-input' value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <button type='submit' className='search-button'>Search</button>
//         </form>
//         <div className="movies-grid">
//             {movies.map(movie =>  (
//                 <MovieCard movie={movie} key={movie.id}  />
//             ))}
//         </div>
//     </div>
//   )
// }

// export default Home




import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { searchMovies, getPopularMovies } from "../Services/api";
import '../css/Home.css';
import Loader from './Loader';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load popular movies on first render
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies); // ✅ update state
      } catch (err) {
        console.error("Error fetching popular movies:", err); // ❌ you had console.err
        setError("Failed to fetch popular movies");
      } finally {
        setLoading(false); // ✅ mark as loaded
      }
    };

    loadPopularMovies();
  }, []);

  // Handle form search
  const handleSearch = async (e) => {
    e.preventDefault();

    if (searchQuery.trim() === "") return;
    if (loading) return; // Prevent multiple submissions while loading

    try {
      setLoading(true);
      const results = await searchMovies(searchQuery);
      setMovies(results);
    } catch (err) {
      console.error("Error searching movies:", err);
      setError("Failed to search movies");
    } finally {
      setLoading(false);
      setSearchQuery("");
    }
  };

  console.log(movies); // Add this before your return

  return (
    <div className='home'>
      <form onSubmit={handleSearch} className='search-form'>
        <input
          type="text"
          placeholder='Search for movies'
          className='search-input'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type='submit' className='search-button'>Search</button>
      </form>

      {loading && <Loader />}

      {error && <p>{error}</p>}

      <div className="movies-grid">
        {movies
          .filter(
            movie =>
              movie.imdbID &&
              movie.Poster &&
              movie.Poster !== "N/A"
          )
          .map(movie => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
      </div>
    </div>
  );
};

export default Home;










