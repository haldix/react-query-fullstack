const express = require('express');
const fs = require('fs');
const { getPosts, writePost } = require('./utils');

const router = express.Router();

router.get('/', (req, res) => {
  getPosts((err, data) => {
    if (err) throw err;
    let posts = JSON.parse(data);
    setTimeout(() => res.json(posts), 1000);
  });
});

router.post('/', (req, res) => {
  let newPost = req.body;

  getPosts((err, data) => {
    if (err) throw err;
    let oldPosts = JSON.parse(data);
    let newPosts = [...oldPosts, newPost];

    writePost(newPosts, (err) => {
      if (err) throw err;
      res.json(newPosts);
      console.log('Data written to file');
    });
  });
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);

  getPosts((err, data) => {
    if (err) throw err;
    let oldPosts = JSON.parse(data);
    let newPosts = oldPosts.filter((post) => post.id != id);

    writePost(newPosts, (err) => {
      if (err) throw err;
      res.json(newPosts);
    });
  });
});

module.exports = router;
