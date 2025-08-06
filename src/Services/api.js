// const API_KEY = "84df7195"; 
// const BASE_URL = "https://www.omdbapi.com/";


// export const searchMovies = async (query) => {
//   const response = await fetch(
//     `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
//   );
//   const data = await response.json();

//   return data.Search || [];
// };


// export const getMovieDetails = async (imdbID) => {
//   const response = await fetch(
//     `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}`
//   );
//   const data = await response.json();

//   return data;
// };



const API_KEY = "84df7195";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.Search || [];
};

export const getMovieDetails = async (imdbID) => {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}`
  );
  const data = await response.json();
  return data;
};

// ✅ ADD THIS FUNCTION:
export const getPopularMovies = async () => {
  const popularTitles = ["Avengers", "Inception", "Interstellar"];
  const promises = popularTitles.map(title => searchMovies(title));
  const results = await Promise.all(promises);
  return results.flat(); // Merge results into one array
};
