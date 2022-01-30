import axios from 'axios';

const url = 'http://localhost:5000/tweets';

export const fetchPosts = () => axios.get(url);