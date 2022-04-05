import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { getTweets } from './actions/tweets';
import Form from './components/Form/Form';
import Tweets from './components/Tweets/Tweets';
import StartPopup from './components/Popup/StartPopup';
import twitterlogo from './images/twitterlogo.png';

import useStyles from './styles';
import 'reactjs-popup/dist/index.css';

const App = () => {
    const tweets = useSelector((state) => state.tweets);
    const [currentId, setCurrentId] = useState(null);
    const [currTweet, setCurrTweet] = useState({});
    const [currUser, setCurrUser] = useState(null);
    const [currMedia, setCurrMedia] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    const randomTweet = () => {
        const random = tweets.data[Math.floor(Math.random() * tweets.data.length)];
        setCurrTweet(random);
    }

    const getUsername = async () => {
        try
        {
            let username = '';
            let usersObj = await tweets.includes.users;
            const uid = currTweet.author_id;

            for (let j = 0; j < 3; j++) {
                let currId = usersObj[j]["id"];
                if(currId === uid) {
                    username = usersObj[j]["username"];
                    setCurrUser(username);
                }
            }
        }
        catch(error){
            console.log(error.message);
        }
    }

    const getMedia = async () => {
        try {
            let url = '';
            let mediaObj = await tweets.includes.media;
            //Get the first media key associated with the current tweet
            const mkey = currTweet.attachments["media_keys"][0];

            for (let j = 0; j < 3; j++) {
                //Get the first media key associated with each tweet in the state
                let currKey = mediaObj[j]["media_key"];
                if (currKey === mkey) {
                    url = mediaObj[j]["url"]
                    setCurrMedia(url);
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        setCurrentId(currTweet.id);
        getUsername();
        getMedia();
    }, [currTweet])

    useEffect(() => {
        dispatch(getTweets());
    }, [dispatch]);
    

    return (
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static'>
                <Typography className={classes.heading} align='center' variant='h2'>Sentiment Label Tool</Typography>
                <img className={classes.image} src={twitterlogo} alt='twitterlogo' height='60'/>
            </AppBar>
            <StartPopup className={classes.instructions} randTweet={randomTweet}/>
            <Grow in>
                <Container>
                    <Grid container>
                        <Grid item xs={12} sm={6}>
                            <Tweets setCurrentId={setCurrentId} author_id={currUser} text={currTweet.text} created_at={currTweet.created_at} media_url={currMedia}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Form currentId={currentId} randTweet={randomTweet}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;