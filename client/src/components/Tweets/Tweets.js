import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

import Tweet from './Tweet/Tweet';
import useStyles from './styles';

const Tweets = () => {
    const classes = useStyles();
    const tweets = useSelector((state) => state.tweets);

    console.log(tweets);

    return (
        <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
            <Grid item xs={11}>
                <Tweet />
            </Grid>
        </Grid>
    );
}

export default Tweets;