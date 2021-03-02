const url = '/posts';

async function getData() {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Unable to fetch data');
  }
  return res.json();
}

async function postData(addPost) {
  const res = await fetch('/posts', {
    method: 'POST',
    body: JSON.stringify(addPost),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    throw new Error('Unable to post data.');
  }
  return res.json();
}

async function deleteData(id) {
  const res = await fetch(`${url}/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error('Unable to delete data.');
  }
  return res.json();
}

export { getData, postData, deleteData };
