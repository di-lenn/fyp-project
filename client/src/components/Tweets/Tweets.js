import React from 'react';
import { Grid } from '@material-ui/core';

import Tweet from './Tweet/Tweet';
import useStyles from './styles';

const Tweets = () => {
    const classes = useStyles();

    return (
        <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
            <Grid item xs={11}>
                <Tweet />
            </Grid>
        </Grid>
    );
}

export default Tweets;