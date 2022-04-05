import mongoose from 'mongoose';

const tweetSchema = mongoose.Schema({
    tweet_id: {
        type: String,
        default: null
    },
    sentiment: {
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
    },
    emotion: {
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
    },
    pairs: {
        pos: {
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
        },
        neu: {
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
        },
        neg: {
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
        }
    }
})

const TweetData = mongoose.model('TweetData', tweetSchema);

export default TweetData;