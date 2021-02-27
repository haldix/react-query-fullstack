import { useState, useEffect } from 'react';

function App() {
  const url = '/posts';
  const [posts, setPosts] = useState([]);
  const [addPost, setAddPost] = useState({ id: '', title: '' });

  const handleChange = (e) => {
    setAddPost({ ...addPost, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/posts', {
      method: 'POST',
      body: JSON.stringify(addPost),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    setPosts(data);
    setAddPost({ id: '', title: '' });
  };

  const handleDelete = async (e) => {
    const { id } = e.target;
    const res = await fetch(`${url}/${id}`, {
      method: 'DELETE',
    });
    const posts = await res.json();
    setPosts(posts);
  };

  useEffect(() => {
    async function getData() {
      const res = await fetch(url);
      const data = await res.json();
      setPosts(data);
    }
    getData();
  }, [url]);

  return (
    <div className='App'>
      <h1>App Frontend</h1>
      <form id='form' onSubmit={handleSubmit}>
        <label htmlFor='id'>ID</label>
        <input
          name='id'
          id='id'
          type='text'
          value={addPost.id}
          onChange={handleChange}
        />
        <label htmlFor='title'>Title</label>
        <input
          id='title'
          type='text'
          name='title'
          value={addPost.title}
          onChange={handleChange}
        />
        <input type='submit' value='Submit' />
      </form>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <button id={post.id} onClick={handleDelete}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
