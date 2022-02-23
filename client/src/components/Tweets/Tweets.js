import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@material-ui/core';

import moment from 'moment';
import useStyles from './styles';
import picture from '../../images/twitterlogo.png';

const Tweets = (oneTweet) => {
    const classes = useStyles();

    return (
        <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
            <Grid item xs={11}>
            <Card className={classes.card}>
                <CardMedia className={classes.media} image={picture} />
                <div className={classes.overlay}>
                    <Typography variant='h6'>@{oneTweet.handle}</Typography>
                    <Typography variant='body2'>{moment(oneTweet.postedOn).format("dddd, MMMM Do YYYY")}</Typography>
                </div>
                <CardContent>
                    <Typography variant='body2' component="p" >{oneTweet.text}</Typography>
                </CardContent>
            </Card>
            </Grid>
        </Grid>
    );
}

export default Tweets;