import React from "react";
import Search from "./Search";
import MovieGrid from "./MovieGrid";
import axios from "axios";
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
            moviesList: [],
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

        console.log("the search term in Main.jsx is: " + this.props.searchTerm);
        console.log("moviesList is " + this.state.moviesList + "in Main.jsx");

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

                const moviesList = res.Search;
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
                <MovieGrid movieMap={moviesList} />
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Main);