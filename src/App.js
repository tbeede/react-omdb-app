import React from 'react';
import './App.css';
import Search from './components/Search';
import MovieCard from './components/MovieCard';
import Toolbar from "@material-ui/core/Toolbar";

function App() {
  return (
    <div className="App">
      <Search/>
      {/*<MovieCard/>*/}
    </div>
  );
}

export default App;
