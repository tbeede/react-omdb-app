import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from '@material-ui/icons/Info';

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
});

class MovieGrid extends React.Component {
    state = {
        spacing: '16',
        search: [],
    };

    componentDidMount() {
        // TODO: onChange event to replace 'title' placeholder e.g., `http://www.omdbapi.com/?s=${this.props.title}&apikey=f86c0e32`
        axios
            .get(
                `http://www.omdbapi.com/?s=hackers&apikey=f86c0e32`
            )
            .then(res => {
                this.setState({
                    search: res.data.Search,
                    title: res.data.Search.Title,
                    poster: res.data.Search.Poster,
                    year: res.data.Search.Year
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        const { classes } = this.props;
        const { spacing } = this.state;
        return (
            <Grid container className={classes.root} spacing={8}>
                <Grid item xs={12}>
                    <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                        {this.state.search.map(tile => (
                            <GridListTile key={tile.Poster}>
                                <img src={tile.Poster} alt={tile.Title} />
                                <GridListTileBar
                                    title={tile.Title}
                                    subtitle={<span>{tile.Year}</span>}
                                    actionIcon={
                                        <IconButton className={classes.icon}>
                                            <InfoIcon />
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