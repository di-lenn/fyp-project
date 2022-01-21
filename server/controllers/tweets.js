import TweetMessage from '../models/tweet.js';

export const getTweets = async (req, res) => {
    try {
        const tweets = await TweetMessage.find();
        res.json(tweets);
    } catch (err) {
        res.json({ message: err });
    }
}