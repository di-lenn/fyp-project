import mongoose from 'mongoose';

const tweetSchema = mongoose.Schema({
    handle: {
        type: String,
        default: "username"
    },
    text: {
        type: String,
        default: "TWEET DATA"
    },
    postedOn: {
        type: Date,
        default: Date.now
    },
    positive: {
        type: Number,
        default: 0
    },
    neutral: {
        type: Number,
        default: 0
    },
    negative: {
        type: Number,
        default: 0
    },
    happiness: {
        type: Number,
        default: 0
    },
    sadness: {
        type: Number,
        default: 0
    },
    fear: {
        type: Number,
        default: 0
    },
    disgust: {
        type: Number,
        default: 0
    },
    anger: {
        type: Number,
        default: 0
    },
    surprise: {
        type: Number,
        default: 0
    }
})

const TweetData = mongoose.model('TweetData', tweetSchema);

export default TweetData;