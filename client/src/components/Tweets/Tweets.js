import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Button, Card, CardContent, CardMedia, Typography } from '@material-ui/core';

import moment from 'moment';
import useStyles from './styles';
import picture from '../../images/twitterlogo.png';

const Tweets = () => {
    const [oneTweet, setOneTweet] = useState({handle: 'jack', text: 'apps have distracted me from just how powerful the web is'});
    const classes = useStyles();
    const tweets = useSelector((state) => state.tweets);

    const handleClick = () => {
        const random = tweets[Math.floor(Math.random() * 5000)];
        setOneTweet(random);
    }

    // console.log(oneTweet);


    return (
        <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
            <Grid item xs={11}>
            <Button onClick={handleClick}>Load New Tweet</Button>
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

            {/* <Tweet tweet={oneTweet} /> */}

            </Grid>
        </Grid>
    );
}

export default Tweets;