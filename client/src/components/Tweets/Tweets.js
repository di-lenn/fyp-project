import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Button } from '@material-ui/core';

import Tweet from './Tweet/Tweet';
import useStyles from './styles';

const Tweets = () => {
    const [oneTweet, setOneTweet] = useState('');
    const classes = useStyles();
    const tweets = useSelector((state) => state.tweets);

    const handleClick = () => {
        const random = tweets[Math.floor(Math.random() * 5000)];
        setOneTweet(random);
        console.log(oneTweet);
    }

    return (
        <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
            <Button onClick={handleClick}>Click me</Button>
            <Grid item xs={11}>
                <Tweet tweet={oneTweet} />
            </Grid>
        </Grid>
    );
}

export default Tweets;