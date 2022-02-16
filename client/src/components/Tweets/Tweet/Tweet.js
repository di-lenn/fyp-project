// 16/02/22 discontinued use of this component
// Tweets.js is sufficient for usage
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';


import moment from 'moment';
import useStyles from './styles';
import picture from '../../../images/twitterlogo.png';

const Tweet = ({ tweet }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={picture} />
            <div className={classes.overlay}>
                <Typography variant='h6'>{tweet.handle}</Typography>
                <Typography variant='body2'>{moment(tweet.postedOn).format("dddd, MMMM Do YYYY")}</Typography>
            </div>
            <CardContent>
                <Typography variant='body2' component="p" >{tweet.text}</Typography>
            </CardContent>
        </Card>
    );
}

export default Tweet;