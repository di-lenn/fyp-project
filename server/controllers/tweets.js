import mongoose from 'mongoose';

import TweetMessage from '../models/tweet.js';
import router from '../routes/tweets.js';

//GET all tweets
export const getTweets = async (req, res) => {
    try {
        const tweets = await TweetMessage.find();
        res.json(tweets);
    } catch (err) {
        res.status(404).json({ message: error.message });
    }
}

//POST create a new tweet
export const createTweet = async (req, res) => {
    const tweet = new TweetMessage({
        handle: req.body.handle,
        text: req.body.text,
        eVotes: {
            happy: req.body.happy,
            sad: req.body.sad,
            angry: req.body.angry,
            excited: req.body.excited,
            distress: req.body.distress
        },
        sVotes: {
            positive: req.body.positive,
            neutral: req.body.neutral,
            negative: req.body.negative
        }
    });
    try{
    const savedTweet = await tweet.save();
    res.json(savedTweet);
    }catch(error){
        res.status(404).json({ message: error.message });
    }
}

//GET a specific tweet by ID
export const getTweet =  async (req, res) => {
    const { id } = req.params;

    try {
        const tweet = await TweetMessage.findById(id);
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
    
    await TweetMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

//PATCH update a specific tweet by ID
export const updateTweet = async (req, res) => {
    const { id } = req.params;

    const { handle, text } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No tweet with id: ${id}`);

    const updatedTweet = { handle, text, _id: id};

    await TweetMessage.findByIdAndUpdate(id, updatedTweet, { new: true });

    res.json(updatedTweet);
}