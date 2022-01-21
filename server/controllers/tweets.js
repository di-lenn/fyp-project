import TweetMessage from '../models/tweet.js';

export const getTweets = async (req, res) => {
    try {
        const tweets = await TweetMessage.find();
        res.json(tweets);
    } catch (err) {
        res.json({ message: err });
    }
}

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
    }catch(err){
        res.json({ message: err });
    }
}