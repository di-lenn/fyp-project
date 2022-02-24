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

        if(currentId) {
            dispatch(updateTweet(currentId, tweetData));
            console.log("dispatched!: ");
        } else {
            console.log('No ID given');
        }
        funcRand();
        clear();
    }

    // Sentiment modifiers
    const votePositive = () => {
        const val = tweet.positive + 1
        setTweetData({ ...tweetData, positive: val})
    }

    const voteNeutral = () => {
        const val = tweet.neutral + 1
        setTweetData({ ...tweetData, neutral: val})
    }

    const voteNegative = () => {
        const val = tweet.negative + 1
        setTweetData({ ...tweetData, negative: val})
    }
    //

    // Emotion Modifiers
    const voteHappiness = () => {
        const val = tweet.happiness + 1
        setTweetData({ ...tweetData, happiness: val})
    }

    const voteSadness = () => {
        const val = tweet.sadness + 1
        setTweetData({ ...tweetData, sadness: val})
    }

    const voteFear = () => {
        const val = tweet.fear + 1
        setTweetData({ ...tweetData, fear: val})
    }
    
    const voteDisgust = () => {
        const val = tweet.disgust + 1
        setTweetData({ ...tweetData, disgust: val})
    }

    const voteAnger = () => {
        const val = tweet.anger + 1
        setTweetData({ ...tweetData, anger: val})
    }

    const voteSurprise = () => {
        const val = tweet.surprise + 1
        setTweetData({ ...tweetData, surprise: val})
    }
    //

    const clear = () => {
        setTweetData({ handle: '', text: '', postedOn: '', positive: 0, neutral: 0, negative: 0, happiness: 0, sadness: 0, fear: 0, disgust: 0, anger: 0, surprise: 0 });
    }

    return (
        <Paper className={classes.paper}>
            <form noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>1. Please select what sentiment is conveyed:</Typography>
                <Button name="positive" label="Positive" className={classes.button} variant='contained' color={tweetData.positive ? "secondary" : "default" } size='large' onClick={votePositive} fullWidth>Positive</Button>
                <Button name="neutral" label="Neutral" className={classes.button} variant='contained' color={tweetData.neutral ? "secondary" : "default" } size='large' onClick={voteNeutral} fullWidth>Neutral</Button>
                <Button name="negative" label="Negative" className={classes.button} variant='contained' color={tweetData.negative ? "secondary" : "default" } size='large' onClick={voteNegative} fullWidth>Negative</Button>

                <Typography variant='h6'>2. Please select the most accurate emotion conveyed:</Typography>
                <Button name="happiness" label="Happiness" className={classes.button} variant='contained' color={tweetData.happiness ? "secondary" : "default" } size='large' onClick={voteHappiness} fullWidth>Happiness</Button>
                <Button name="sadness" label="Sadness" className={classes.button} variant='contained' color={tweetData.sadness ? "secondary" : "default" } size='large' onClick={voteSadness} fullWidth>Sadness</Button>
                <Button name="fear" label="Fear" className={classes.button} variant='contained' size='large' color={tweetData.fear ? "secondary" : "default" } onClick={voteFear} fullWidth>Fear</Button>
                <Button name="disgust" label="Disgust" className={classes.button} variant='contained' color={tweetData.disgust ? "secondary" : "default" } size='large' onClick={voteDisgust} fullWidth>Disgust</Button>
                <Button name="anger" label="Anger" className={classes.button} variant='contained' color={tweetData.anger ? "secondary" : "default" } size='large' onClick={voteAnger} fullWidth>Anger</Button>
                <Button name="surprise" label="Surprise" className={classes.button} variant='contained' color={tweetData.surprise ? "secondary" : "default" } size='large' onClick={voteSurprise} fullWidth>Surprise</Button>
                <Button className={classes.buttonSubmit} variant='contained' color='Primary' size="large" type='submit' fullWidth>Submit</Button>
            </form>
        </Paper>
    );
}

export default Form;