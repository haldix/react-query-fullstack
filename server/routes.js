const express = require('express');
const fs = require('fs');
const { getPosts, writePost } = require('./utils');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    let data = await getPosts();
    let posts = JSON.parse(data);
    setTimeout(() => res.json(posts), 2000);
    // res.json(posts);
  } catch (err) {
    console.log(err);
  }
});

router.post('/', async (req, res) => {
  let newPost = req.body;
  try {
    let data = await getPosts();
    let oldPosts = JSON.parse(data);
    let newPosts = [...oldPosts, newPost];

    let postData = await writePost(newPosts);
    let posts = JSON.parse(postData);
    res.json(posts);
  } catch (err) {
    console.log(err);
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    let data = await getPosts();
    let oldPosts = JSON.parse(data);
    let newPosts = oldPosts.filter((post) => post.id != id);

    let postData = await writePost(newPosts);
    let posts = JSON.parse(postData);
    res.json(posts);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
