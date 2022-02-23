import { FETCH_ALL, VOTE } from '../constants/actionTypes';
import * as api from '../api';

//Action Creators
export const getTweets = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updateTweet = (id, tweet) => async (dispatch) => {
    try {
        const { data } = await api.updateTweet(id, tweet);

        dispatch({ type: updateTweet, payload: data });
    } catch (error) {
        console.log(error)
    }
}