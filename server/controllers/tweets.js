import mongoose from 'mongoose';

import TweetData from '../models/tweet.js';

import { TwitterApi } from 'twitter-api-v2';

const twitterClient = new TwitterApi('AAAAAAAAAAAAAAAAAAAAAFCRagEAAAAAtP1TpgU9EeYMJD8uwOVk3KIZ1Vw%3DW0Zry7AKlbrzx0mZnlALCeoxeGbXvIsbSXkKmA8Jb4YOB4QdNg');
const roClient = twitterClient.readOnly;

//GET all tweets using Twitter API
export const getTweets = async (req, res) => {
    try {
        //Get tweetdatas from DB
        const tweets = await TweetData.find();
        //Compile list of tweet_id's only
        const tweet_arr = [];
        for (let i = 0; i <= tweets.length; ++i) {
            let extract = tweets[i].tweet_id;
            tweet_arr.push(extract);

            if(tweet_arr.length == tweets.length) {
                break;
            }
        }
        // Use Twitter API to get tweet data — tData
        const tData = await roClient.v2.tweets(tweet_arr, {
            expansions: ['attachments.media_keys','author_id'],
            'media.fields': ['url'],
            'tweet.fields': ['author_id','created_at'],
          });
        console.log(tData.includes["media"]);
        res.json(tData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//GET all tweets voting data
export const getVotes = async (req, res) => {
    try {
        const tweets = await TweetData.find();
        console.log('sending mongodb data to client');
        res.json(tweets);
    } catch (err) {
        res.status(404).json({ message: error.message });
    }
}

//POST create a new tweet
export const createTweet = async (req, res) => {
    const { handle, text, positive, neutral, negative, happiness, sadness, fear, disgust, anger, surprise } = req.body;

    const newTweetData = new TweetData({ handle, text, positive, neutral, negative, happiness, sadness, fear, disgust, anger, surprise });
    try{
        await newTweetData.save();
        res.status(201).json(newTweetData);
    }catch(error){
        res.status(409).json({ error });
    }
}

//GET a specific tweet by ID
export const getTweet =  async (req, res) => {
    const { id } = req.params;

    try {
        const tweet = await TweetData.findById(id);
        res.status(200).json(tweet);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//DELETE a specific tweet by ID
export const deleteTweet = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) 
        return res.status(404).send(`No tweet with id: ${id}`);
    
    await TweetData.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

//PATCH update a specific tweet by ID
export const updateTweet = async (req, res) => {
    const { id: tID } = req.params;
    const tweet = req.body;

    try {
        const sentimentVote = tweet.sentiment;
        const emotionVote = tweet.emotion;

        // Use the tweet_id passed from client to find document in DB
        const filter = { tweet_id: tID };
        let dbTweet = await TweetData.findOne(filter);

        // Get the existing group JSON data for requested tweet
        const schemaSentiment = dbTweet.sentiment;
        const schemaEmotion = dbTweet.emotion;
        const schemaPairs = dbTweet.pairs;
        let schemaSubPairs = {};
        //console.log(schemaPairs["pos"]);

        // Find which group to update pair value
        let pair_group = "";
        switch(sentimentVote) {
            case "positive":
                pair_group = "pos";
                schemaSubPairs = schemaPairs["pos"];
                break;
            case "neutral":
                pair_group = "neu";
                schemaSubPairs = schemaPairs["neu"];
                break;
            case "negative":
                pair_group = "neg";
                schemaSubPairs = schemaPairs["neg"];
                break;
            default:
                pair_group = "";
                break;
        }

        //Increment the existing value in the DB
        let db_sInput = schemaSentiment[sentimentVote] + 1;
        let db_eInput = schemaEmotion[emotionVote] + 1;
        let db_pInput = schemaPairs[pair_group][emotionVote] + 1;

        //Fields to be updated
        const update = { 
            sentiment: { ...schemaSentiment, [sentimentVote]: db_sInput },
            emotion: { ...schemaEmotion, [emotionVote]: db_eInput },
            pairs: { ...schemaPairs, [pair_group]: { 
                        ...schemaSubPairs, [emotionVote]: db_pInput 
                    } 
            }
        };

        const doc = await TweetData.findOneAndUpdate(filter, update, {new: true});
        res.status(200).json(doc);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
    //console.log(doc);
    // const { handle, text, positive, neutral, negative, happiness, sadness, fear, disgust, anger, surprise  } = req.body;

    //if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No tweet with id: ${_id}`);

    //const updatedTweet = await TweetData.findByIdAndUpdate(_id, { ...tweet, _id}, { new: true });
}