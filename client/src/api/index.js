import axios from 'axios';

const url = 'http://localhost:5000/tweets';

export const fetchTweets = () => axios.get(url);
export const updateTweet = (id, updatedTweet) => axios.patch(`${url}/${id}`, updatedTweet);