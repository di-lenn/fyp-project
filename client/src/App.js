import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import Form from './components/Form/Form';
import Tweets from './components/Tweets/Tweets';
import twitterlogo from './images/twitterlogo.png';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();

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
                            <Tweets />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;