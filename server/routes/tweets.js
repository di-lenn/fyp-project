import express from 'express';

//Import Controllers 
import { getTweets } from '../controllers/tweets.js';

const router = express.Router();

router.get('/', getTweets);

export default router;