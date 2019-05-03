import React from "react";
import Search from "./Search";
import MovieGrid from "./MovieGrid";

class Main extends React.Component {
    render() {
        const { movie } = this.props;
        return(
            <React.Fragment>
                <Search />
                <MovieGrid />
            </React.Fragment>
        );
    }
}

export default Main;