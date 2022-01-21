import mongoose from 'mongoose';

const tweetSchema = mongoose.Schema({
    handle: String,
    text: String,
    postedOn: {
        type: Date,
        default: new Date()
    },
    eVotes: {
        happy: Number,
        sad: Number,
        angry: Number,
        excited: Number,
        distress: Number
    },
    sVotes: {
        positive: Number,
        neutral: Number,
        negative: Number
    }
})

const TweetMessage = mongoose.model('TweetMessage', tweetSchema);

export default TweetMessage;