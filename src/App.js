import React from 'react';
import './App.css';
import Search from './components/Search';
import MovieCard from './components/MovieCard';
import {withStyles} from "@material-ui/core";

const styles = ({
    // body: {
    //     backgroundColor: 'black'
    // }
});

class App extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.body}>
                <Search/>
                <MovieCard/>
            </div>
        );
    }
}

export default withStyles(styles)(App);
