import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import picture from '../../../images/twitterlogo.png';

const Tweet = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={picture} />
            <div className={classes.overlay}>
                <Typography variant='h6'>Username</Typography>
                <Typography variant='body2'>PostDate</Typography>
            </div>
            <CardContent>
                <Typography variant='body2' component="p" >Text here</Typography>
            </CardContent>
        </Card>
    );
}

export default Tweet;