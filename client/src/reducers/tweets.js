import { FETCH_ALL, UPDATE } from '../constants/actionTypes';

const tweets = (tweets = [], action) => {
    switch(action.type) {
        case FETCH_ALL:
            return action.payload;
        case UPDATE:
            return tweets.map((tweet) => tweet._id === action.payload._id ? action.payload : tweet);
        default:
            return tweets;
    }
}

export default tweets