import { useState, useEffect } from 'react';
import { getData, postData, deleteData } from './api';

function App() {
  const [posts, setPosts] = useState([]);
  const [addPost, setAddPost] = useState({ id: '', title: '' });

  const handleChange = (e) => {
    setAddPost({ ...addPost, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await postData(addPost);
    setPosts(data);
    setAddPost({ id: '', title: '' });
  };

  const handleDelete = async (e) => {
    const { id } = e.target;
    const posts = await deleteData(id);
    setPosts(posts);
  };

  useEffect(() => {
    async function callData() {
      await getData();
    }
    callData();
  }, []);

  return (
    <div className='App'>
      <h1>App Frontend</h1>
      <form id='form' onSubmit={handleSubmit}>
        <fieldset>
          <legend>Input to backend</legend>
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
        </fieldset>
      </form>
      <h2>Data from backend</h2>
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
