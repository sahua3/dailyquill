const express = require('express');
const Post = require('../models/Post').default;
const router = express.Router();

// Get all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new post
app.post('/api/posts', async (req, res) => {
    try {
      const { title, content } = req.body;
  
      // Create a new post instance
      const newPost = new Post({ title, content });
  
      // Save the new post to the database
      await newPost.save();
  
      // Respond with the new post
      res.status(201).json(newPost);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error adding post' });
    }
  });

module.exports = router;
