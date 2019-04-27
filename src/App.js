import React from 'react';
import './App.css';
import Search from './components/Search';
import MovieCard from './components/MovieCard';

function App() {
  return (
    <div className="App">
      <Search/>
      <MovieCard/>
    </div>
  );
}

export default App;
