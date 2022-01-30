import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

import Tweet from './Tweet/Tweet';
import useStyles from './styles';

const Tweets = () => {
    const classes = useStyles();
    const tweets = useSelector((state) => state.tweets);

    return (
        <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
            {tweets.map((tweet) => (
                
                <Grid key={tweet._id} item xs={11}>
                    <Tweet tweet={tweet} />
                </Grid>
                
            ))}
        </Grid>
    );
}

export default Tweets;