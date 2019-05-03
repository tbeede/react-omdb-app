import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {GridListTileBar} from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import hackers from "../images/hackers.jpg"
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from '@material-ui/icons/Info';
import axios from 'axios';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: 'black',
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});

class MovieGrid extends React.Component {
    state = {
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
        // const { search } = this.state;
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <GridList cellHeight={'auto'} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
                        <ListSubheader component="div">Results</ListSubheader>
                    </GridListTile>
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
                </GridList>
            </div>
        );
    }
}

export default withStyles(styles)(MovieGrid);