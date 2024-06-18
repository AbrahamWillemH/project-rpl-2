const express = require('express');
const {
    getArticles,
    getArticle,
    createArticle,
    deleteArticle,
    updateArticle
} = require('../controllers/articlesController');
const router = express.Router();

// GET all Articles
router.get('/', getArticles);

// GET a single Article
router.get('/:id', getArticle);

// POST a new Article
router.post('/', createArticle);

// DELETE an Article
router.delete('/:id', deleteArticle);

// UPDATE an Article
router.patch('/:id', updateArticle);

module.exports = router;
