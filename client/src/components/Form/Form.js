import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Typography, Button } from '@material-ui/core';

import useStyles from './styles';
import { updateTweet } from '../../actions/tweets';

const Form = ( { currentId, randTweet } ) => {
    const [tweetData, setTweetData] = useState({id: currentId, sentiment: '', emotion: ''});
    const [sFlag, setSFlag] = useState(false);
    const [eFlag, setEFlag] = useState(false);
    const tweet = useSelector((state) => currentId ? state.tweets.data.find((p) => p.id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const funcRand = randTweet;

    useEffect(() => {
        if(tweet)
            setTweetData({...tweetData, id: currentId});
    }, [tweet])


    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentId) {
            setTweetData({ ...tweetData, id: currentId })
            dispatch(updateTweet(currentId, tweetData));
            console.log("dispatched!: " + currentId);
        } else {
            console.log('No ID given');
        }
        funcRand();
        clear();
    }

    // Sentiment modifiers
    const votePositive = () => {
        const val = 'positive';
        setTweetData({...tweetData, sentiment: val});
    }

    const voteNeutral = () => {
        const val = 'neutral'
        setTweetData({...tweetData, sentiment: val});
    }

    const voteNegative = () => {
        const val = 'negative'
        setTweetData({...tweetData, sentiment: val});
    }
    //

    // Emotion Modifiers
    const voteHappiness = () => {
        const val = 'happiness'
        setTweetData({...tweetData, emotion: val});
    }

    const voteSadness = () => {
        const val = 'sadness'
        setTweetData({...tweetData, emotion: val});
    }

    const voteFear = () => {
        const val = 'fear'
        setTweetData({...tweetData, emotion: val});
    }
    
    const voteDisgust = () => {
        const val = 'disgust'
        setTweetData({...tweetData, emotion: val});
    }

    const voteAnger = () => {
        const val = 'anger'
        setTweetData({...tweetData, emotion: val});
    }

    const voteSurprise = () => {
        const val = 'surprise'
        setTweetData({...tweetData, emotion: val});
    }
    //

    const clear = () => {
        setTweetData({id: '', sentiment: '', emotion: ''});
        setSFlag(!sFlag);
        setEFlag(!eFlag);
    }

    return (
        <Paper className={classes.paper}>
            <form noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6' className={classes.typography}>1. Please select what sentiment is conveyed:</Typography>
                <Button name="positive" label="Positive" className={classes.button} variant='contained' color={(tweetData.sentiment === "positive") ? "secondary" : "default" } size='large' onClick={votePositive} fullWidth>Positive</Button>
                <Button name="neutral" label="Neutral" className={classes.button} variant='contained' color={(tweetData.sentiment === "neutral") ? "secondary" : "default" } size='large' onClick={voteNeutral} fullWidth>Neutral</Button>
                <Button name="negative" label="Negative" className={classes.button} variant='contained' color={(tweetData.sentiment === "negative") ? "secondary" : "default" } size='large' onClick={voteNegative} fullWidth>Negative</Button>

                <Typography variant='h6' className={classes.typography}>2. Please select the most accurate emotion conveyed:</Typography>
                <Button name="happiness" label="Happiness" className={classes.button} variant='contained' color={(tweetData.emotion === "happiness") ? "secondary" : "default" } size='large' onClick={voteHappiness} fullWidth>Happiness</Button>
                <Button name="sadness" label="Sadness" className={classes.button} variant='contained' color={(tweetData.emotion === "sadness") ? "secondary" : "default" } size='large' onClick={voteSadness} fullWidth>Sadness</Button>
                <Button name="fear" label="Fear" className={classes.button} variant='contained' size='large' color={(tweetData.emotion === "fear") ? "secondary" : "default" } onClick={voteFear} fullWidth>Fear</Button>
                <Button name="disgust" label="Disgust" className={classes.button} variant='contained' color={(tweetData.emotion === "disgust") ? "secondary" : "default" } size='large' onClick={voteDisgust} fullWidth>Disgust</Button>
                <Button name="anger" label="Anger" className={classes.button} variant='contained' color={(tweetData.emotion === "anger") ? "secondary" : "default" } size='large' onClick={voteAnger} fullWidth>Anger</Button>
                <Button name="surprise" label="Surprise" className={classes.button} variant='contained' color={(tweetData.emotion === "surprise") ? "secondary" : "default" } size='large' onClick={voteSurprise} fullWidth>Surprise</Button>
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size="large" type='submit' fullWidth>Submit</Button>
            </form>
        </Paper>
    );
}

export default Form;