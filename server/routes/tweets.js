import express from 'express';

//Import Controllers 
import { getTweets, getVotes, createTweet, getTweet, deleteTweet, updateTweet } from '../controllers/tweets.js';

const router = express.Router();

router.get('/', getTweets);
router.get('/', getVotes);
router.post('/', createTweet);
router.get('/:id', getTweet);
router.delete('/:id', deleteTweet);
router.patch('/:id', updateTweet);

export default router;