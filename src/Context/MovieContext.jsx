// import { createContext, useState, useContext,useEffect } from "react";

// const MovieContext = createContext();

// export const useMovieContext = () =>  useContext(MovieContext);

// export const MovieProvider = ({ children }) => {
//     const [movies, setMovies] = useState([]);
//     const [favorites, setFavories] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState("");
    
//     useEffect(() => {
//         const storedFavs = localStorage.getItem("favorites")
//         if(storedFavs) setfavorites(JSON.parse(storedFavs)) 
        
//     }, []);
//     useEffect(() => {
//         localStorage.setItem("favorites", JSON.stringify(favorites));
//     }, [favorites]);
//     const addToFavorites = (movie) => {
//         setFavorites(prev =>  [...prev, movie]);
//     }
//     const removeFromFavorites = (movieId) => {
//         setFavorites(prev => prev.filter(movie => movie.id !== movieId));
//     }
//     const isFavorite = (movieId) => {
//         return favorites.some(movie => movie.id === movieId);
//     }
//     const value = {
//         favorites,
//         addToFavorites,
//         removeFromFavorites,
//         isFavorite
//     }
//     return (
//         <MovieContext.Provider value={{ movies, setMovies, loading, setLoading, error, setError }}>
//         {childern}
//         </MovieContext.Provider>
//     );
// }


// import { createContext, useState, useContext, useEffect } from "react";

// const MovieContext = createContext();

// export const useMovieContext = () => useContext(MovieContext);

// export const MovieProvider = ({ children }) => {
//   const [movies, setMovies] = useState([]);
//   const [favorites, setFavorites] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const storedFavs = localStorage.getItem("favorites");
//     if (storedFavs) setFavorites(JSON.parse(storedFavs));
//   }, []);

  
//   useEffect(() => {
//     localStorage.setItem("favorites", JSON.stringify(favorites));
//   }, [favorites]);


//   const addToFavorites = (movie) => {
//     setFavorites((prev) => [...prev, movie]);
//   };


//   const removeFromFavorites = (movieId) => {
//     setFavorites((prev) => prev.filter((movie) => movie.imdbID !== movieId));
//   };

 
//   const isFavorite = (movieId) => {
//     return favorites.some((movie) => movie.imdbID === movieId);
//   };

//   const value = {
//     movies,
//     setMovies,
//     favorites,
//     addToFavorites,
//     removeFromFavorites,
//     isFavorite,
//     loading,
//     setLoading,
//     error,
//     setError,
//   };

//   return (
//     <MovieContext.Provider value={value}>
//       {children}
//     </MovieContext.Provider>
//   );
// };










import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");
    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Helper functions
  const isFavorites = (id) => favorites.some((movie) => movie.imdbID === id);

  const addToFavorite = (movie) => {
    if (!isFavorites(movie.imdbID)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFromFavorite = (id) => {
    setFavorites(favorites.filter((movie) => movie.imdbID !== id));
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        loading,
        setLoading,
        error,
        setError,
        favorites,
        isFavorites,
        addToFavorite,
        removeFromFavorite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
