const Article = require('../models/articleModel'); // Menggunakan model Article
const mongoose = require('mongoose');

// Get all articles
const getArticles = async (req, res) => {
    try {
        const articles = await Article.find({}).sort({ createdAt: -1 });
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a single article
const getArticle = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such article' });
    }

    try {
        const article = await Article.findById(id);

        if (!article) {
            return res.status(404).json({ error: 'No such article' });
        }

        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new article
const createArticle = async (req, res) => {
    const { title, link } = req.body;

    // Add article to database
    try {
        const article = await Article.create({ title, link });
        res.status(200).json(article);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete an article
const deleteArticle = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such article' });
    }

    try {
        const article = await Article.findOneAndDelete({ _id: id });

        if (!article) {
            return res.status(404).json({ error: 'No such article' });
        }

        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update an article
const updateArticle = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such article' });
    }

    try {
        const article = await Article.findOneAndUpdate({ _id: id }, { ...req.body });

        if (!article) {
            return res.status(404).json({ error: 'No such article' });
        }

        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getArticles,
    getArticle,
    createArticle,
    deleteArticle,
    updateArticle
};
