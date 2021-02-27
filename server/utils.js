const fs = require('fs');

let file = `${__dirname}/data.json`;

function getPosts() {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

function writePost(post) {
  let data = JSON.stringify(post);
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
}

module.exports = { getPosts, writePost };
