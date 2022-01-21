import express from 'express';

//Import Controllers 
import { getTweets, createTweet } from '../controllers/tweets.js';

const router = express.Router();

router.get('/', getTweets);
router.post('/', createTweet);

export default router;