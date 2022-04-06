import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, CircularProgress } from '@material-ui/core';

import moment from 'moment';
import useStyles from './styles';
//import picture from '../../images/twitterlogo.png';

const Tweets = (oneTweet) => {
    const classes = useStyles();

    return (
        <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
            <Grid item xs={11}>
            <Card className={classes.card}>
                <>
                    {oneTweet.media_url ? (
                        <CardMedia className={classes.media} image={oneTweet.media_url} />
                    ) : (
                        <CircularProgress />
                    )}
                </>
                <div className={classes.overlay}>
                    <Typography variant='h6'>@{oneTweet.author_id}</Typography>
                    <Typography variant='body2'>{moment(oneTweet.created_at).format("dddd, MMMM Do YYYY")}</Typography>
                </div>
                <CardContent>
                    <Typography variant='body2' component="p" className={classes.typography}>{oneTweet.text}</Typography>
                </CardContent>
            </Card>
            </Grid>
        </Grid>
    );
}

export default Tweets;