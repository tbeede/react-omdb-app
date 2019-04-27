import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        maxWidth: 'auto',
    },
    media: {
        height: 'auto',
    },
};

function MovieCard(props) {
    const { classes } = props;
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image=""
                    title=""
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Movie Placeholder
                    </Typography>
                    <Typography component="p">
                       Movie Description
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    IMDb Link
                </Button>
                <Button size="small" color="primary">
                    Release Date
                </Button>
            </CardActions>
        </Card>
    );
}

MovieCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieCard);