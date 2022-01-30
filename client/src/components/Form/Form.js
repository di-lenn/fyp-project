import React from 'react';
import { Paper, Typography, Button } from '@material-ui/core';

import useStyles from './styles';

const Form = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <form className={`${classes.root} ${classes.form}`}>
                <Typography variant='h6'>Please select what sentiment is conveyed:</Typography>
                <Button className={classes.button} variant='contained' size='large' fullWidth>Positive</Button>
                <Button className={classes.button} variant='contained' size='large' fullWidth>Neutral</Button>
                <Button className={classes.button} variant='contained' size='large' fullWidth>Negative</Button>

                <Typography variant='h6'>Please select the most accurate emotion conveyed:</Typography>
                <Button className={classes.button} variant='contained' size='large' fullWidth>Happiness</Button>
                <Button className={classes.button} variant='contained' size='large' fullWidth>Sadness</Button>
                <Button className={classes.button} variant='contained' size='large' fullWidth>Fear</Button>
                <Button className={classes.button} variant='contained' size='large' fullWidth>Disgust</Button>
                <Button className={classes.button} variant='contained' size='large' fullWidth>Anger</Button>
                <Button className={classes.button} variant='contained' size='large' fullWidth>Surprise</Button>
            </form>
        </Paper>
    );
}

export default Form;