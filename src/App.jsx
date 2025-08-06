import React from 'react';
import { MovieProvider } from './Context/MovieContext';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Favorites from './components/Favorites';

function App() {
  return (
    <MovieProvider>
      <NavBar/>
      <main>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Favorites" element={<Favorites/>}/>
      </Routes>
    
    </main>
    </MovieProvider>
  );
}

export default App;
