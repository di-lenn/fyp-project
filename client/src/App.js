import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { getTweets } from './actions/tweets';
import Form from './components/Form/Form';
import Tweets from './components/Tweets/Tweets';
import twitterlogo from './images/twitterlogo.png';

import useStyles from './styles';

const App = () => {
    const mountTweet = {handle: 'jack', text: 'apps have distracted me from just how powerful the web is', postedOn: '2021-10-31T03:23:00.000Z', positive: 0, neutral: 0, negative: 0, happiness: 0, sadness: 0, fear: 0, disgust: 0, anger: 0, surprise: 0 }
    const [currentId, setCurrentId] = useState(null);
    const [currTweet, setCurrTweet] = useState(mountTweet);
    const tweets = useSelector((state) => state.tweets);
    const classes = useStyles();
    const dispatch = useDispatch();

    const randomTweet = () => {
        const random = tweets[Math.floor(Math.random() * 5000)];
        setCurrTweet(random);
        //console.log('This is inside the RANDOM func')
    }

    useEffect(() => {
        setCurrentId(currTweet._id)
    }, [currTweet])

    useEffect(() => {
        dispatch(getTweets());
    }, [dispatch]);

    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static'>
                <Typography className={classes.heading} align='center' variant='h2'>Sentiment Label Tool</Typography>
                <img className={classes.image} src={twitterlogo} alt='twitterlogo' height='60'/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container>
                        <Grid item xs={12} sm={6}>
                            <Tweets setCurrentId={setCurrentId} handle={currTweet.handle} text={currTweet.text} postedOn={currTweet.postedOn}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Form currentId={currentId} randTweet={randomTweet}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;