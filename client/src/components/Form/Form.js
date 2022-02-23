import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Typography, Button } from '@material-ui/core';

import useStyles from './styles';
import { updateTweet } from '../../actions/tweets';

const Form = ( { currentId, randTweet } ) => {
    const [tweetData, setTweetData] = useState({ handle: '', text: '', postedOn: '', positive: 0, neutral: 0, negative: 0, happiness: 0, sadness: 0, fear: 0, disgust: 0, anger: 0, surprise: 0 });
    const tweet = useSelector((state) => currentId ? state.tweets.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const funcRand = randTweet;

    useEffect(() => {
        if(tweet)
            setTweetData(tweet)
    }, [tweet])

    const handleSubmit = (e) => {
        e.preventDefault();

        funcRand()

        if(currentId) {
            dispatch(updateTweet(currentId, tweet))
        } else {
            console.log('No ID given')
        }
    }

    const votePositive = () => {
        const val = tweet.positive + 1
        console.log(val)
        setTweetData({ ...tweetData, positive: val})
    }

    // onClick={setTweetData({ ...tweetData, positive: tweetData.positive + 1 })}

    return (
        <Paper className={classes.paper}>
            <form noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>1. Please select what sentiment is conveyed:</Typography>
                <Button name="positive" label="Positive" value={tweetData.positive} className={classes.button} variant='contained' size='large' onClick={votePositive} fullWidth>Positive</Button>
                <Button className={classes.button} variant='contained' size='large' fullWidth>Neutral</Button>
                <Button className={classes.button} variant='contained' size='large' fullWidth>Negative</Button>

                <Typography variant='h6'>2. Please select the most accurate emotion conveyed:</Typography>
                <Button className={classes.button} variant='contained' size='large' fullWidth>Happiness</Button>
                <Button className={classes.button} variant='contained' size='large' fullWidth>Sadness</Button>
                <Button className={classes.button} variant='contained' size='large' fullWidth>Fear</Button>
                <Button className={classes.button} variant='contained' size='large' fullWidth>Disgust</Button>
                <Button className={classes.button} variant='contained' size='large' fullWidth>Anger</Button>
                <Button className={classes.button} variant='contained' size='large' fullWidth>Surprise</Button>
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size="large" type='submit' fullWidth>Submit</Button>
            </form>
        </Paper>
    );
}

export default Form;