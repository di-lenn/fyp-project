import express from 'express';

//Import Controllers 
import { getTweets, createTweet, getTweetById } from '../controllers/tweets.js';

const router = express.Router();

router.get('/', getTweets);
router.post('/', createTweet);
router.get('/:id', getTweetById);

export default router;