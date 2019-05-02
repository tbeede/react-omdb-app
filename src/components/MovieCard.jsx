import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {GridListTileBar} from "@material-ui/core";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import hackers from "../images/hackers.jpg"
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from '@material-ui/icons/Info';

  

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});



class MovieCard extends React.Component {
    render() {
        const tileData = [
            {
                img: hackers,
                title: 'Hackers',
                subTitle: 'hackers'
            },
        ];
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <GridList cellHeight={'auto'} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                        <ListSubheader component="div">December</ListSubheader>
                    </GridListTile>
                    {tileData.map(tile => (
                        <GridListTile key={tile.img}>
                            <img src={tile.img} alt={tile.title} />
                            <GridListTileBar
                                title={tile.title}
                                subtitle={<span>by: {tile.subTitle}</span>}
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

export default withStyles(styles)(MovieCard);