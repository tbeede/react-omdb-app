import React from "react";
import Search from "./Search";
import MovieGrid from "./MovieGrid";
import axios from "axios";
import InputBase from "@material-ui/core/InputBase";
import CircularProgress from "@material-ui/core/CircularProgress";
import {withStyles} from "@material-ui/core";

const styles = ({
    root: {
        backgroundColor: 'black',
    },
});

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            moviesList: ['tt0113243'],
            searchTerm: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }


    handleChange = event => {
        console.log("this is the Search searchTerm: " + this.state.searchTerm);
        this.setState({
            searchTerm: event.target.value
        });
    };

    search() {

        console.log("the search term in Main is: " + this.props.searchTerm);

        axios
            .get(
                `https://www.omdbapi.com/?apikey=f86c0e32&s=${
                    this.state.searchTerm
                    }&plot=full`
            )
            .then(res => res.data)
            .then(res => {
                if (!res.Search) {
                    this.setState({ moviesList: [] });
                    return;
                }

                const moviesList = res.Search.map(movie => movie.imdbID);
                this.setState({
                    moviesList
                });
            });
    };

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.search();
        }
    };

    render() {
        const { moviesList } = this.state;
        return(
            <React.Fragment>
                <Search
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <React.Fragment>
                    {<CircularProgress> moviesList.length > 0 </CircularProgress> ? (
                        moviesList.map(movie => (
                            <MovieGrid movieID={movie} key={movie} />
                        ))) : (
                        <p>
                            Couldn't find any movie. Please search again using
                            another search criteria.
                        </p>
                    )}
                </React.Fragment>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Main);