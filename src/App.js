import React from 'react';
import './App.css';
import Search from './components/Search';
import MovieGrid from './components/MovieGrid';

class App extends React.Component {
    render() {
        return (
            <div>
                <Search/>
                <MovieGrid/>
            </div>
        );
    }
}

export default App;
