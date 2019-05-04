import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from '@material-ui/icons/Info';
import {CircularProgress, withStyles} from "@material-ui/core";
import axios from "axios";
import SoldOut from '../images/sold-out.jpg'
import NoPhoto from '../images/no-photo.jpg'

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
    };

    componentDidMount() {
        let url = `https://www.omdbapi.com/?apikey=f86c0e32&s=
        ${this.props.movieMap}
        &plot=full`;

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
        const { classes, movieMap } = this.props;
        const { spacing } = this.state;

        return (
            <Grid container className={classes.root} spacing={8}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={Number(spacing)}>
                        {movieMap.length > 0 ? (
                            movieMap.map(res => (
                                <GridListTile key={res.Poster}>
                                    {res.Poster === '' || res.Poster === 'N/A' ?
                                        <img src={NoPhoto} alt={NoPhoto} />
                                        : <img src={res.Poster} alt={res.Title} />
                                    }
                                    <GridListTileBar
                                        title={res.Title}
                                        subtitle={<span>{res.Year}</span>}
                                        actionIcon={
                                            <IconButton className={classes.icon}>
                                                <InfoIcon/>
                                            </IconButton>
                                        }
                                    />
                                </GridListTile>
                            ))
                        ) : (
                            <p>
                                Sorry. We couldn't find the movie you're searching for. Please try again.
                            </p>
                        )}
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