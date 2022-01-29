import mongoose from 'mongoose';

import TweetMessage from '../models/tweet.js';

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
    const { handle, text, eVotes: { happy, sad, angry, excited, distress }, sVotes: { positive, neutral, negative } } = req.body;

    const newTweetMessage = new TweetMessage({ handle, text, eVotes: { happy, sad, angry, excited, distress }, sVotes: { positive, neutral, negative } });
    try{
        await newTweetMessage.save();
        res.status(201).json(newTweetMessage);
    }catch(error){
        res.status(409).json({ error });
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