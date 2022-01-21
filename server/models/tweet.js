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
    eVotes: {
        happy: {
            type: Number,
            default: 0
        },
        sad: {
            type: Number,
            default: 0
        },
        angry: {
            type: Number,
            default: 0
        },
        excited: {
            type: Number,
            default: 0
        },
        distress: {
            type: Number,
            default: 0
        }
    },
    sVotes: {
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
        }
    }
})

const TweetMessage = mongoose.model('TweetMessage', tweetSchema);

export default TweetMessage;