import mongoose from 'mongoose';

import TweetData from '../models/tweet.js';

//GET all tweets
export const getTweets = async (req, res) => {
    try {
        const tweets = await TweetData.find();
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
    const { id } = req.params;

    const { handle, text } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No tweet with id: ${id}`);

    const updatedTweet = { handle, text, _id: id};

    await TweetData.findByIdAndUpdate(id, updatedTweet, { new: true });

    res.json(updatedTweet);
}