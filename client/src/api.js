const url = '/posts';

async function getData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
}

async function postData(addPost) {
  try {
    const res = await fetch('/posts', {
      method: 'POST',
      body: JSON.stringify(addPost),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
}

async function deleteData(id) {
  try {
    const res = await fetch(`${url}/${id}`, {
      method: 'DELETE',
    });
    const posts = await res.json();
    return posts;
  } catch (err) {
    return err;
  }
}

module.exports = { getData, postData, deleteData };
