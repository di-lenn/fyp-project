import { FETCH_ALL } from '../constants/actionTypes';

const tweets = (tweets = [], action) => {
    switch(action.type) {
        case FETCH_ALL:
            return action.payload;
        default:
            return tweets;
    }
}

export default tweets