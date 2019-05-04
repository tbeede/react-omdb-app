import React from "react";
import Search from "./Search";
import MovieGrid from "./MovieGrid";
import axios from "axios";

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
        this.setState({
            searchTerm: event.target.value
        });
    };

    search() {
        let url = `https://www.omdbapi.com/?apikey=f86c0e32&s=${
            this.state.searchTerm
            }&plot=full`;

        axios
            .get(
                url
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
                < MovieGrid movieMap={moviesList} />
                }
            </React.Fragment>
        );
    }
}

export default Main;