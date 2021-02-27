const fs = require('fs');

let file = `${__dirname}/data.json`;

function getPosts(cb) {
  return fs.readFile(file, cb);
}

function writePost(post, cb) {
  let data = JSON.stringify(post);
  fs.writeFile(file, data, cb);
}

module.exports = { getPosts, writePost };
