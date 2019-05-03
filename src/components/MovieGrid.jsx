import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from '@material-ui/icons/Info';
import {CircularProgress, withStyles} from "@material-ui/core";
import axios from "axios";
import Search from "./Search";

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'black',
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
    spinner: {
        color: '#134FA8',
        alignSelf: 'center'
    }
});

class MovieGrid extends React.Component {
    state = {
        spacing: '16',
        movieInfo: [],
        // searchTerm: 'Hackers' // default
    };

    componentDidMount() {
        console.log("the search term in MovieGrid is: " + this.props.movieId);

        let url = `https://www.omdbapi.com/?apikey=f86c0e32&i=${
            this.props.movieID
            }&plot=full`;

        axios
            .get(
                url
            )
            .then(res => res.data)
            .then(res => {
                this.setState({ movieInfo: res });
            })
            .catch(err => console.log(err));
    }

    render() {
        const { classes } = this.props;
        const { spacing } = this.state;
        const {
            Title,
            Released,
            Genre,
            Plot,
            Poster,
            imdbRating,
            Year
        } = this.state.movieInfo;

        if (!Poster || Poster === 'N/A') {
            return null;
        }

        return (
            <Grid container className={classes.root} spacing={8}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={Number(spacing)}>
                        {/*{movieInfo.map(res => (*/}
                            <GridListTile key={Poster}>
                                <img src={Poster} alt={Title}/>
                                <GridListTileBar
                                    title={Title}
                                    subtitle={<span>{Year}</span>}
                                    actionIcon={
                                        <IconButton className={classes.icon}>
                                            <InfoIcon/>
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

MovieGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieGrid);