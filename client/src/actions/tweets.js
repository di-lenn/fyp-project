import { FETCH_ALL, UPDATE } from '../constants/actionTypes';
import * as api from '../api';

//Action Creators
export const getTweets = () => async (dispatch) => {
    try {
        const {data} = await api.fetchTweets();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updateTweet = (id, tweet) => async (dispatch) => {
    try {
        const { data } = await api.updateTweet(id, tweet);
        
        dispatch({ type: UPDATE, payload: data });
    } catch (error) {
        console.log(error)
    }
}