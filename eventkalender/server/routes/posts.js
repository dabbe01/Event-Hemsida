import express from 'express';
const router = express.Router();

import { getPostsBySearch, getPosts, getPost, createPost,  deletePost } from '../controllers/posts.js';

import auth from "../middleware/auth.js";

router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/',auth,  createPost);
router.delete('/:id', auth, deletePost);

export default router;